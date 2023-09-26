import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();
// create group
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
//get group list
router.get('/', (req, res) => {
    res.status(501).json({error: "Not implemented"})
})
//get group by id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented: ${id}`})
})
//update group
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented: ${id}`})
})
//delete group
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented: ${id}`})
})

export default router