import asyncHandler from 'express-async-handler';
import pool from '../config/connectDB.js';


// @desc    Get all locations
// @route   GET /api/location
// @access  Public
export const getDivisions = asyncHandler(async(req,res)=>{
    const query = `SELECT DISTINCT(l.division) FROM tour_db."Location" l 
                  left join tour_db."Tourist_Spot" ts 
                   on l.location_id = ts.location_id`
    const locations = await pool.query(query);
    res.json(locations.rows);
})


// @desc    Get tourist spots by division
// @route   GET /api/location/:division
// @access  Public
export const getTouristSpotsByDivision = asyncHandler(async(req,res)=>{
    const division = req.params.division;
    const query = `SELECT ts.id,ts.name,ts.description,ts.location_id,
                    l.name,l.division,l.city,i.image_urls
                    FROM tour_db."Tourist_Spot" ts
                    left join tour_db."Location" l
                    on ts.location_id = l.location_id
                    left join tour_db."Image" i 
                    on ts.image_id = i.id
                    WHERE l.division ILIKE $1`
    const spots = await pool.query(query,[division]);
    res.json(spots.rows);
})



