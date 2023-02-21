import express from "express";
import {
    getTamu,
    getTamuById,
    saveTamu,
    updateTamu,
    deleteTamu
} from "../controller/tamuController.js";

const router = express.Router();

router.get('/tamu', getTamu);
router.get('/tamuById/:id', getTamuById);
router.post('/saveTamu', saveTamu);
router.patch('/updateTamu/:id', updateTamu);
router.delete('/deleteTamu/:id', deleteTamu);

export default router;