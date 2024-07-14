import express from "express";
const router = express.Router();
import {getDivisions,getTouristSpotsByDivision} from '../controller/locationController.js'





router.get('/',getDivisions);

router.get('/:division',getTouristSpotsByDivision);



export default router;