import express from 'express';
const Router = express.Router();

import {placeOrder} from '../controller/orderController.js';
import {protect} from '../middlewares/auth.js';


Router.post('/',protect, placeOrder);




export default Router;