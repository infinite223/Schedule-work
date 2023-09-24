import { Router } from "express";

const router = Router();
// create group
router.post('/', (req, res) => {
    res.status(501).json({error: "Not implemented"})
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