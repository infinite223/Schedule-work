import { Router } from "express";
import { PrismaClient } from '@prisma/client'
import { formatStringToDate } from "../services/convertStringToDate";
import { timeCounter } from "../services/timeCounter";

const router = Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
    const { email, name, userName, phoneNumber } = req.body

    try {
        const result = await prisma.user.create({
            data: {
                email,
                name,
                userName,
                phoneNumber,
            }
        })

        res.json(result)
    } catch (e) {
        res.status(400).json({error: "Nazwa użytkownika lub email jest już zajęty"})
    }

})

router.get('/', async (req, res) => {
    const allUsers = await prisma.user.findMany();
    res.json(allUsers)
})

router.get('/usersInWorkPace/:id', async (req, res) => {
    const { id } = req.params;
    
    const users = await prisma.user.findMany({
        where: {
            AND: [
                { workPlaceId: Number(id) },
                {
                    NOT: {
                        groupId: {
                            not: null
                        }
                    }
                }
            ]
        },
    });

    res.json(users)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    console.log(id, 'd')

    const user = await prisma.user.findUnique({where: { id: Number(id)}});
    res.json(user)
})

router.put('/:id', async (req, res) => {
    const { id } = req.params;
        const { name, userName, phoneNumber } = req.body
        console.log(name, userName, phoneNumber,'edit')
    try {
        const result = await prisma.user.update({
            where: {id: Number(id)},
            data: { name, userName, phoneNumber: Number(phoneNumber) }
        })

        console.log(result)
        res.json(result)
    } catch (e) {
        console.log(e)
        res.status(400).json({error: "Faild to update the user"})
    }
})

router.delete('/:id', async (req, res) => {
   const { id } = req.params;

   await prisma.user.delete({where: { id: Number(id) }})
   res.sendStatus(200)
})


router.post('/removeUserFromGroup', async (req, res) => {
    const { userId, groupId } = req.body
    console.log(userId, groupId , "remove")
    try {
        const result = await prisma.group.update({where: {
            id: Number(groupId)
        },
        data: {users: {disconnect: {id: Number(userId)}}}
    })

        res.json(result)
    } catch (e) {
        res.status(400).json({error: "Nazwa użytkownika lub email jest już zajęty"})
    }

})

export default router