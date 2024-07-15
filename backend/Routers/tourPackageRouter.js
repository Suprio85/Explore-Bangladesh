import express from 'express';
const Router = express.Router();
import {getTourPackages,getTourPackageById,getTourPackagePlaces,
        createCart
} from '../controller/tourPackageController.js';

import {protect} from '../middlewares/auth.js';


Router.get('/', getTourPackages);
Router.get('/:id', getTourPackageById);
Router.get('/:id/places', getTourPackagePlaces);
Router.post('/cart',protect, createCart);


export default Router;