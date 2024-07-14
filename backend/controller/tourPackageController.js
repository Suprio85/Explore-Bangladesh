import pool from '../config/connectDB.js';
import asyncHandler from 'express-async-handler';

// @desc    Get all tour packages
// @route   GET /api/tourpackage
// @access  Public


export const getTourPackages = asyncHandler(async(req,res)=>{
    const query = `SELECT * FROM "Tour_Packages"`;
    const packages = await pool.query(query);
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