import { Router } from "express";
import {
  getCars,
  getEntretien,
  listPiece,
  createVehicles,
  createEntretien,
  createPiece,
} from "../controller/vehicles.controller.js";
const router = Router();

router.post("/", createVehicles);

router.get("/list", getCars);
router.get("/ent", getEntretien);
router.get("/list_piece", listPiece);
router.post("/create", createVehicles);
router.post("/create_ent", createEntretien);
router.post("/create_piece", createPiece);
export default router;
