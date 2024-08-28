import pool from "../config/connectDB.js";
import asyncHandler from "express-async-handler";


// @desc    Get all cart items
// @route   GET /api/cart
// @access  Private

export const getCartItems = asyncHandler(async(req,res)=>{

    const user_id = req.user.user_id;
    const query = `SELECT 
    c.id,
    c.user_id,
    cp.tour_package_id,
    tp.name,
    tp.price,
    tp.image_url,
    cp.quantity
    FROM "Cart" c
    join "Cart_Package" cp
    on c.id = cp.cart_id
    JOIN "Tour_Packages" tp
    on cp.tour_package_id = tp.id
    WHERE c.user_id = $1    
    `;
    const cartItems = await pool.query(query,[user_id]);
    res.json(cartItems.rows);
})


// @desc    Add item to cart
// @route   POST /api/cart
// @access  Private

export const addItemToCart = asyncHandler(async(req,res)=>{
    const user_id = req.user.user_id;
    console.log(req.body);
    const {id,quantity} = req.body;
    const price = parseInt(req.body.price);
    const query = `SELECT * FROM "Cart" WHERE user_id = $1`;
    const cart = await pool.query(query,[user_id]);
    if(cart.rows.length === 0){
        const query = `INSERT INTO "Cart" (user_id) VALUES ($1) RETURNING *`;
        const newCart = await pool.query(query,[user_id]);
        const cart_id = newCart.rows[0].id;
        const query2 = `INSERT INTO "Cart_Package" (cart_id,tour_package_id,price,quantity) VALUES ($1,$2,$3,$4) RETURNING *`;
        const cartPackage = await pool.query(query2,[cart_id,id,price,quantity]);
        res.status(201).json(cartPackage.rows[0]);
    }else{

    const cart_id = cart.rows[0].id;
   const query2 =`INSERT INTO "Cart_Package" (cart_id,tour_package_id,price,quantity) VALUES ($1,$2,$3,$4) RETURNING *`;
    const cartPackage = await pool.query(query2,[cart_id,id,price,quantity]);
    res.status(201).json(cartPackage.rows[0]);
    }
})


// @desc    Update cart item
// @route   PUT /api/cart/:id
// @access  Private
export const updateCart = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const {quantity,price} = req.body;
    console.log(quantity,price,id);
    const query = `UPDATE "Cart_Package" SET quantity = $1, price = $2 WHERE tour_package_id = $3 RETURNING *`;
    const updatedItem = await pool.query(query,[quantity,price,id]);

    res.json(updatedItem.rows[0]);
})

// @desc    Delete cart item
// @route   DELETE /api/cart/:id
// @access  Private
export const deleteCartItem = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const query = `DELETE FROM "Cart_Package" WHERE tour_package_id = $1`;
    await pool.query(query,[id]);
    res.json({message:'Item removed from cart'});
})