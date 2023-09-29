import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken'
import { sendEmailToken } from "../services/emailService";

const EMAIL_TOKEN_EXPIRATION_MINUTES = 10;
const AUTHENTICATION_TOKEN_EXPIRATION_HOURS = 12;
const JWT_SECRET = "SUPER SECRET"

const generateEmailToken = () => {
    return Math.floor(10000000 + Math.random() * 90000000).toString()
}

const generateAuthToken = (tokenId:number) => {
   const jwtPayload = { tokenId }

   return jwt.sign(jwtPayload, JWT_SECRET, {
    algorithm: "HS256",
    noTimestamp: true 
   })
}

const prisma = new PrismaClient();
const router = Router();

router.post('/login', async (req, res) => {
    const { email } = req.body;
    const emailToken = generateEmailToken()
    const expiration = new Date(new Date().getTime() + EMAIL_TOKEN_EXPIRATION_MINUTES * 60 * 1000)

    try {
        const createdToken = await prisma.token.create({
            data: {
                type: "EMAIL",
                emailToken,
                expiration,
                user: {
                    connectOrCreate: { 
                        where: { email },
                        create: { email }
                    }
                }
            }
        })

        await sendEmailToken(email, emailToken)
        res.sendStatus(200);
    } catch (e) {
        res.status(400).json({error: "Couldn t start generation process"});
    }
})

router.post('/authenticate', async (req, res) => {
    const { email, emailToken } = req.body;
    const expiration = new Date(new Date().getTime() + AUTHENTICATION_TOKEN_EXPIRATION_HOURS * 60 * 60 * 1000)
    console.log(email, emailToken, 'dadda')
    const dbEmailToken = await prisma.token.findUnique({
        where: {
            emailToken
        },
        include: {
            user: true
        }
    })

    if(!dbEmailToken || !dbEmailToken.valid){
        return res.sendStatus(401)
    }

    if(dbEmailToken.expiration < new Date()){
        return res.status(401).json({error: "Token expired"})
    }

    if(dbEmailToken?.user?.email !== email){
        return res.status(401)
    }

    const apiToken = await prisma.token.create({
        data: {
            type: "API",
            expiration,
            user: {
                connect: {email}
            }
        }
    })

    await prisma.token.update({
        where: {
            id: dbEmailToken.id
        },
        data: {
            valid: false
        }
    })

    const authToken = generateAuthToken(apiToken.id);
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })

    res.json({ authToken, user })
})

export default router