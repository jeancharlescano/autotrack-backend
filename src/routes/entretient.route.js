

import { Router } from "express";
import {
    createEntretien,
    getEntretien
} from "../controller/entretient.controller.js";
const router = Router();


router.post("/", createEntretien);
router.get("/", getEntretien);

export default router;
