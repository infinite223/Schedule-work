import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

router.post('/', async (req, res) => {
    const { name, description, workPlaceId } = req.body;
    //@ts-ignore
   const user = req.user

   try {
    const result = await prisma.group.create({
        data: {
            name, description, workPlaceId
        }
    })
    console.log(result, 'ee')
    res.json(result)
   } catch (e) {
    console.log(e)
    res.status(400).json({error: "Username and email should be unique"})
   }

    res.status(200)
})

router.get('/', async (req, res) => {
    const groups = await prisma.group.findMany();
    res.json(groups)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const group = await prisma.group.findUnique({where: { id: Number(id)}});
    res.json(group)
})

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body
    
    try {
        const result = await prisma.group.update({
            where: {id: Number(id)},
            data: { name, description }
        })

        res.json(result)
    } catch (e) {
        res.status(400).json({error: "Faild to update the workplace"})
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.group.delete({where: { id: Number(id) }})
    res.sendStatus(200)
})

export default router