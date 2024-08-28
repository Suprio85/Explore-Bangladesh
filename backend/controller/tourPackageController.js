import pool from '../config/connectDB.js';
import asyncHandler from 'express-async-handler';

// @desc    Get all tour packages
// @route   GET /api/tourpackage
// @access  Public


export const getTourPackages = asyncHandler(async(req,res)=>{
    const query = `SELECT 
    tp.id, 
    tp.name, 
    tp.description, 
    tp.price, 
    tp.image_url,
    tp.total_enrollment, 
    tp.group_size,
    tp.tour_duration,
    COALESCE(AVG(pr.rating), 0) AS rating
FROM 
    "Tour_Packages" tp
LEFT JOIN 
    "Package Review" pr
ON 
    tp.id = pr.tour_package_id
GROUP BY
    tp.id, 
    tp.name, 
    tp.description, 
    tp.price, 
    tp.image_url, 
    tp.total_enrollment, 
    tp.group_size,
    tp.tour_duration;`;
    const packages = await pool.query(query);
    //console.log(packages.rows);
    res.json(packages.rows);
})


// @desc    Get tour package by id
// @route   GET /api/tourpackage/:id
// @access  Public
export const getTourPackageById = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const query = `SELECT * FROM "Tour_Packages" WHERE id = $1`;
    const packages = await pool.query(query,[id]);
    if(packages.rows.length === 0){
        res.status(404);
        throw new Error('No tour package found');
    }
    res.json(packages.rows[0]);
})


// @desc    Get tour package places
// @route   GET /api/tourpackage/:id/places
// @access  Public
export const getTourPackagePlaces = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const query = `SELECT ts.id,ts.name,ts.description,ts.location_id,
                    l.name,l.division,l.city,i.image_urls
                    FROM "Tour_Packages" tp
                    left join "Got" g
                    on tp.id = g.tour_package_id
                    left join "Tourist_Spot" ts
                    on g.tourist_spot_id = ts.id
                    left join "Location" l
                    on ts.location_id = l.location_id
                    left join "Image" i
                    on ts.image_id = i.id
                    WHERE tp.id = $1`;
    const spots = await pool.query(query,[id]);
    if(spots.rows.length === 0){
        res.status(404);
        throw new Error('No tourist spot found');
    }
    res.json(spots.rows);
})

// @desc    Create cart for order
// @route   POST /api/tourpackage/cart
// @access  Private

export const createCart = asyncHandler(async(req,res)=>{
    console.log(req.body);
    const tour_packages = req.body.cart;
    const user_id = req.user.user_id;
    const query = `INSERT INTO "Cart" (user_id,price) VALUES ($1,0) RETURNING *`;
    const cart = await pool.query(query,[user_id]);
    const cart_id = cart.rows[0].id;
    console.log(cart_id);
    let total_cost = 0;
    for (const tour_pacakage of tour_packages) {
     const price = await pool.query(`SELECT price FROM "Tour_Packages" WHERE id = $1`,[tour_pacakage.id]);
     if(price.rows.length === 0){
         res.status(404);
         throw new Error('Tour package not found');
     }
     const cost = price.rows[0].price*tour_pacakage.quantity;
     total_cost += cost;

     const query = `INSERT INTO "Cart_Package" (tour_package_id,cart_id,quantity,price) VALUES ($1,$2,$3,$4) RETURNING *`;

     const response= await pool.query(query,[tour_pacakage.id,cart_id,tour_pacakage.quantity,cost]);
        if(response.rows.length === 0){
            res.status(404);
            throw new Error( 'not Inserted into cart');
        }
    }

    console.log("Total cost",total_cost);
    const response= await pool.query(`UPDATE "Cart" SET price = $1 WHERE id = $2 RETURNING *`,[total_cost,cart_id]);
    if(response.rows[0].length === 0){
        res.status(404);
        throw new Error( 'not updated cart price');
    }
    res.json({cart_id});
    console.log("Cart created. Ready for the order");
})

// 




