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

// router.get('/:id', async (req, res) => {
//     const { id } = req.params;
//     console.log(id, 'd')

//     const user = await prisma.user.findUnique({where: { id: Number(id)}});
//     res.json(user)
// })

router.get('/getHoursPrediction', async (req, res) => {
    //@ts-ignore
    const user = req.user

    const currentDate = new Date()
    const hoursPredictions:any = []
    
    const allUsersInDays = await prisma.userInDay.findMany({
         orderBy: {day: {date: "asc"}}, include: { day: {}}, where:{ userId: 2 }
    }); 

    let numberHoursFull = {hours: 0, minutes: 0}
    let numberHoursNow = {hours: 0, minutes: 0}
    let currentMonth = currentDate.getMonth(); //10
    const sortedAllUsersInDay:any = []
    
    allUsersInDays.forEach((userInDay) => {
        const userInDayDate = formatStringToDate(userInDay.day.date)
        const time = timeCounter(userInDay.from, userInDay.to)

        sortedAllUsersInDay.push(
            {
                month: userInDayDate.getMonth(),
                year: userInDayDate.getFullYear(),
                day: userInDayDate.getDate(),
                time: {h: time.godziny, m: time.minuty}
            }
        )
    })

    sortedAllUsersInDay?.forEach((element:any) => {
        if(currentMonth===element.month){
            numberHoursFull.hours += element.time.h
            numberHoursFull.minutes += element.time.m

            if(currentDate.getDate()<=element.day) {
                numberHoursNow.hours += element.time.h
                numberHoursNow.minutes += element.time.m
            }
        }
    });

    hoursPredictions.push({
        year: currentDate.getFullYear(),
        month: currentDate.getMonth(),
        numberHoursFull,
        numberHoursNow
    })

    res.json(hoursPredictions)
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