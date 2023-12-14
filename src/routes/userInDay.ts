import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

router.post('/', async (req, res) => {
    const { from, to, dayId, userId } = req.body;

   try {
    const result = await prisma.userInDay.create({
        data: {
            from,
            to,
            dayId,
            userId
        }
    })

    res.json(result)
   } catch (e) {
    console.log(e)
    res.status(400).json({error: "Username and email should be unique"})
   }

    res.status(200)
})

router.get('/', async (req, res) => {
    const { dayId } = req.body;

    const usersInDay = await prisma.userInDay.findMany({where: { dayId }});
    res.json(usersInDay)
})

// router.get('/:id', async (req, res) => {
//     const { id } = req.params;
//     const day = await prisma.userInDay.findUnique({where: { id: Number(id)}});
//     res.json(day)
// })

router.get('/getAllFutureUserInDays/:userId', async (req, res) => {
    const { userId } = req.params;

    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // +1, bo miesiące są liczone od 0 do 11
    const day = currentDate.getDate().toString().padStart(2, '0');

    const formattedDate = `${year}/${month}/${day}`

    const userInDays = await prisma.userInDay.findMany({ orderBy: {day: {date: "asc"}},include: { day: {}}, where:{ userId: Number(userId), day: { date: { gte: formattedDate } } }});    
    console.log(userInDays, 'getAllFutureUserInDays')
    res.json(userInDays)
})
// npm production:build
router.get('/getCurrentMonthUserInDays/:userId', async (req, res) => {
    const { userId } = req.params;

    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // +1, bo miesiące są liczone od 0 do 11
    const day = currentDate.getDate().toString().padStart(2, '0');

    const gte = `${year}/${month}/01`
    const lte = `${year}/${month}/31`

    const userInDays = await prisma.userInDay.findMany({ 
        orderBy: {day: {date: "asc"}}, include: { day: {}}, 
        where:{ userId: Number(userId), day: { date: { 
            gte: gte,
            lte: lte
        } } }
    });    
    
    console.log(userInDays, 'getAllFutureUserInDays')
    res.json(userInDays)
})
  
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { from, to } = req.body
    
    try {
        const result = await prisma.userInDay.update({
            where: {id: Number(id)},
            data: { from, to }
        })

        res.json(result)
    } catch (e) {
        res.status(400).json({error: "Faild to update the workplace"})
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.userInDay.delete({where: { id: Number(id) }})
    res.sendStatus(200)
})

export default router