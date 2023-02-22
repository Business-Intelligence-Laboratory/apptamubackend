import express from "express";
import {
    saveTamu
} from "../controller/tamuController.js";

const tamuRoutes = express.Router();

tamuRoutes.post('/saveTamu', saveTamu);

export default tamuRoutes;