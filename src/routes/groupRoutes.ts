import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

router.post('/', async (req, res) => {
    const { name, description } = req.body;
    //@ts-ignore
   const user = req.user
   console.log('tu', user, 's')
   try {
    const result = await prisma.group.create({
        data: {
            name, description, workPlaceId: user.workPlaceId
        },
        include: { users: {} }
    })
    console.log(result, 'ee')
    res.json(result)
   } catch (e) {
    console.log(e)
    res.status(400).json({error: "Username and email should be unique"})
   }
})

router.get('/', async (req, res) => {
    const { workPlaceId } = req.body;
    console.log(workPlaceId)
    const groups = await prisma.group.findMany({ where: {workPlaceId: Number(workPlaceId)} });
    res.json(groups)
})

router.post('/getGroupWithDays/:id', async (req, res) => {
    const { id } = req.params;
    const { startDate, endDate } = req.body
    const groups = await prisma.group.findMany({ 
        where: {workPlaceId: Number(id)},
        include: { 
            days: { 
                include: { usersInDay: { include: { user: {} } }}, 
                // where: { date: {equals: findingDate} }
                where: {
                    AND: [
                      {
                        date: {
                          gte: startDate, // Start of the desired month
                        },
                      },
                      {
                        date: {
                          lt: endDate, // Start of the next month
                        },
                      },
                    ],
                  },
            }, 
            users: { where: { workPlaceId: Number(id) } } 
        }
     });

    res.json(groups)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const groups = await prisma.group.findMany({ 
        where: {workPlaceId: Number(id)},
        include: { users: { where: { workPlaceId: Number(id) } } }
     });
    res.json(groups)
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