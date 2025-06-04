import { Router } from "express";
import vehicles from "./vehicles.routes.js"
import  get_cars,{get_entretien,list_piece,createVehicles,create_entretien,create_piece} from "../controller/vehicles.controller.js";


const router = Router();

router.use("/vehicles", vehicles)

router.get('/list',get_cars)
router.get('/ent',get_entretien)
router.get('/list_piece',list_piece)
router.post('/create',createVehicles)
router.post('/create_ent',create_entretien)
router.post('/create_piece',create_piece)
export default router