import { Router } from "express";
import { PrismaClient } from '@prisma/client'

const router = Router();
const prisma = new PrismaClient();

// create user
router.post('/', async (req, res) => {
    const { email, name, userName } = req.body

    try {
        const result = await prisma.user.create({
            data: {
                email,
                name,
                userName
            }
        })

        res.json(result)
    } catch (e) {
        res.status(400).json({error: "Nazwa użytkownika lub email jest już zajęty"})
    }

})
//get users list
router.get('/', async (req, res) => {
    const allUsers = await prisma.user.findMany();
    res.json(allUsers)
})
//get user by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await prisma.user.findUnique({where: { id: Number(id)}});
    res.json(user)
})
//update user
router.put('/:id', async (req, res) => {
    const { id } = req.params;
        const { name, userName } = req.body
        
    try {
        const result = await prisma.user.update({
            where: {id: Number(id)},
            data: { name, userName }
        })

        res.json(result)
    } catch (e) {
        res.status(400).json({error: "Faild to update the user"})
    }
})
//delete user
router.delete('/:id', async (req, res) => {
   const { id } = req.params;

   await prisma.user.delete({where: { id: Number(id) }})
   res.sendStatus(200)
})

export default router