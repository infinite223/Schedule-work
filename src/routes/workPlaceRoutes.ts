import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const router = Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
    const { name } = req.body;
    //@ts-ignore
   const user = req.user

   try {
    const result = await prisma.workPlace.create({
        data: {
            name,
            adminId: user.id
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
    res.json(workPlace)
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

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.workPlace.delete({where: { id: Number(id) }})
    res.sendStatus(200)
})

export default router