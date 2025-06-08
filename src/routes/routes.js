import { Router } from "express";
import vehicles from "./vehicles.routes.js"
import pieces from "./piece.route.js"
import entretients from "./entretient.route.js"


const router = Router();

router.use("/vehicles", vehicles)
router.use("/pieces", pieces)
router.use("/entretients", entretients)

export default router