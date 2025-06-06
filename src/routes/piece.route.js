import { Router } from "express";
import {
  listPiece,
  createPiece,
} from "../controller/piece.controller.js";
const router = Router();


router.get("/", listPiece);
router.post("/", createPiece);
export default router;
