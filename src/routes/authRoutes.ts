import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

router.post('/authenticateV2', async (req, res) => {
    const { email } = req.body;
    
    const findUser = await prisma.user.findUnique({where: { email }})

    if(findUser) {
        res.json(findUser)
    }
    else {
        res.sendStatus(400)
    }
})

export default router