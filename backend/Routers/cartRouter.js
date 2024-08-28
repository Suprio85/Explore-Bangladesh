import express from "express";
const Router = express.Router();
import {getCartItems,addItemToCart,updateCart,deleteCartItem} from '../controller/cartController.js';
import {protect} from '../middlewares/auth.js';

Router.route('/').get(protect,getCartItems);
Router.route('/').post(protect,addItemToCart);
Router.route('/:id').put(protect,updateCart);
Router.route('/:id').delete(protect,deleteCartItem);


export default Router;


