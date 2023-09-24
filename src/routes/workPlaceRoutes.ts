import { Router } from "express";

const router = Router();
// create workPlace
router.post('/', (req, res) => {
    res.status(501).json({error: "Not implemented"})
})
//get workPlace list
router.get('/', (req, res) => {
    res.status(501).json({error: "Not implemented"})
})
//get workPlace by id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented: ${id}`})
})
//update workPlace
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented: ${id}`})
})
//delete workPlace
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented: ${id}`})
})

export default router