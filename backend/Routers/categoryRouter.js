import express from 'express';
const Router = express.Router();

import {getCategories,getTouristSpotsByCategory} from '../controller/categoryController.js';


Router.get('/', getCategories);

Router.get('/:category_id', getTouristSpotsByCategory);




export default Router;