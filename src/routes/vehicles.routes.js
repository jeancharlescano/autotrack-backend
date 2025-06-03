import { Router } from "express";
import { createVehicles } from "../controller/vehicles.controller.js";
const router = Router()

router.post("/", createVehicles)

export default router