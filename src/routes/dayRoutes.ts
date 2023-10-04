import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

router.post('/', async (req, res) => {
    const { date } = req.body;
    //@ts-ignore
   const user = req.user
   console.log(date)

   try {
    const result = await prisma.day.create({
        data: {
            date, 
            groupId: user.groupId,
        },
    })
    console.log(result, 'ee')
    res.json(result)
   } catch (e) {
    console.log(e)
    res.status(400).json({error: "Username and email should be unique"})
   }

    res.status(200)
})

router.post('/getSpecyficDay', async (req, res) => {
    const { date } = req.body;
     //@ts-ignore
    const user = req.user
    const day = await prisma.day.findUnique(
        { 
            where: { date, groupId: user.groupId },
            include: {usersInDay: { include: { user: {} } }}
        }
    );

    console.log(day, 'da', date)

    if(!day){
        res.sendStatus(401)
    }
    else {
        res.json(day)
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const day = await prisma.day.findUnique({where: { id: Number(id)}});
    res.json(day)
})

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { usersInDay } = req.body
    
    try {
        const result = await prisma.day.update({
            where: {id: Number(id)},
            data: { usersInDay }
        })

        res.json(result)
    } catch (e) {
        res.status(400).json({error: "Faild to update the workplace"})
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.day.delete({where: { id: Number(id) }})
    res.sendStatus(200)
})

export default router