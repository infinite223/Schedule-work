import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const router = Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
    const { name, userId } = req.body;

   try {
    const result = await prisma.workPlace.create({
        data: {
            name,
            adminId: userId
        }
    })

    res.json(result)
   } catch (e) {
    res.status(400).json({error: "Username and email should be unique"})
   }

    res.status(200)
})

router.get('/',  async (req, res) => {
    const workPlace = await prisma.workPlace.findMany();
    res.json(workPlace)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const workPlace = await prisma.workPlace.findUnique({where: { id: Number(id)}});

    try {
        if(workPlace) {
            res.json(workPlace)
        }
        else {
            res.send(401)
        }
    } catch (error) {
        res.send(404)
    }
    
})

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, groups, users } = req.body
    
    try {
        const result = await prisma.workPlace.update({
            where: {id: Number(id)},
            data: { name, groups, users }
        })

        res.json(result)
    } catch (e) {
        res.status(400).json({error: "Faild to update the workplace"})
    }
})

router.put('/addUserToWorkPlace/:id', async (req, res) => {
    const { id } = req.params;
    const { email } = req.body

    const findUser = await prisma.user.findUnique({where: { email }})
    console.log(findUser, 'eeee')
    if(findUser) {
        try {
            const result = await prisma.workPlace.update({
                where: {id: Number(id)},
                data: { users: {connect: { email }} },
            })
    
            res.json(result)
        } catch (e) {
            res.status(400).json({error: "Faild to update the workplace"})
        }
    } else {
        res.status(401).json({error: "Użytkwonik nie istnieje"})
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.workPlace.delete({where: { id: Number(id) }})
    res.sendStatus(200)
})

export default router