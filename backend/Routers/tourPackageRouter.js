import express from 'express';
const Router = express.Router();
import {getTourPackages,getTourPackageById,getTourPackagePlaces} from '../controller/tourPackageController.js';


Router.get('/', getTourPackages);
Router.get('/:id', getTourPackageById);
Router.get('/:id/places', getTourPackagePlaces);


export default Router;