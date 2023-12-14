import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

router.post('/', async (req, res) => {
    const { name, description, workPlaceId } = req.body;
   try {
    const result = await prisma.group.create({
        data: {
            name, description, workPlaceId
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

router.post('/addUserToGroup', async (req, res) => {
    const { userId, groupId } = req.body;

   try {
    const result = await prisma.group.update({
        where: { id: Number(groupId)},
        data: {users: { connect: {id: Number(userId)} }}
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
    
    const groups = await prisma.group.findMany({ where: {workPlaceId: Number(workPlaceId)} });
    res.json(groups)
})

router.post('/getGroupWithDays', async (req, res) => {
    const { startDate, endDate } = req.body
    const groups = await prisma.group.findMany({  
        include: { 
            days: { 
                include: { usersInDay: { include: { user: {} } }}, 
                where: {
                    AND: [
                      {
                        date: {
                          gte: startDate, 
                        },
                      },
                      {
                        date: {
                          lt: endDate, 
                        },
                      },
                    ],
                  },
            }, 
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