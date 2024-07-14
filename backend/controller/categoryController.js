import pool from '../config/connectDB.js';
import asyncHandler from 'express-async-handler';


// @desc    Get all categories
// @route   GET /api/category
// @access  Public
export const getCategories = asyncHandler(async(req,res)=>{
    const query = `SELECT * FROM "Category"`;
    const categories = await pool.query(query);
    res.json(categories.rows);
})

// @desc    Get tourist spots by category
// @route   GET /api/category/:category_id
// @access  Public
export const getTouristSpotsByCategory = asyncHandler(async(req,res)=>{
    const category_id = req.params.category_id;
   
   const query = `SELECT ts.id,ts.name,ts.description,ts.location_id,
                    l.name,l.division,l.city,i.image_urls
                    FROM "Tourist_Spot" ts
                    left join "Location" l
                    on ts.location_id = l.location_id
                    left join "Image" i 
                    on ts.image_id = i.id
                    left join "Tourist_Spot_Category" tsc
                    on ts.id = tsc.tourist_spot_id
                    WHERE tsc.category_id = $1`;
    const spots = await pool.query(query,[category_id]);
    if(spots.rows.length === 0){
        res.status(404);
        throw new Error('No tourist spot found');
    }
    res.json(spots.rows);
})





