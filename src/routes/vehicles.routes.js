import { Router } from "express";
import {
  getCars,
  createVehicles,
} from "../controller/vehicles.controller.js";
const router = Router();

router.post("/", createVehicles);
router.get("/", getCars);

export default router;
