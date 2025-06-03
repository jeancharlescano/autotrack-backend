import { Router } from "express";
import vehicles from "./vehicles.routes.js"
const router = Router();

router.use("/vehicles", vehicles)

export default router