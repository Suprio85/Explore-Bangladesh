import pool from '../config/connectDB.js';
import asyncHandler from 'express-async-handler';

// @desc    Get all tourist spots
// @route   GET /api/touristspot
// @access  Public

export const getTouristSpots = asyncHandler(async(req,res)=>{
    const spots = await pool.query(`SELECT * FROM "Tourist_Spot"`);
    if(spots.rows.length === 0){
        res.status(404);
        throw new Error('No tourist spot found');
    }
    res.status(200).json(spots.rows);
})

// @desc    Get tourist spot by id
// @route   GET /api/touristspot/:id
// @access  Public

export const getTouristSpotById = asyncHandler(async(req,res)=>{
const id = req.params.id;


const query=`SELECT * ts.id,ts.name,ts.description,ts.entry_fee
            l.name,l.division,l.city,i.image_urls,
            s.opening_time,s.closing_time
            FROM "Tourist_Spot" ts
            left join "Location" l
            on ts.location_id = l.location_id
            left join "Schedule" s
            on ts.schedule_id = s.id
            left join "Image" i
            on ts.image_id = i.id
            where ts.id = $1`;
            

const spot = await pool.query(query,[id]);

console.log(spot);

if(spot.rows.length === 0){
    res.status(404);
    throw new Error('Tourist spot not found');
}
res.status(200).json(spot.rows);

})

// @desc    Get tourist spot by category
// @route   GET /api/touristspot/category/:category
// @access  Public

export const getTouristSpotByCategory = asyncHandler(async(req,res)=>{
    const category = req.params.category;
    const query = `SELECT ts.id,ts.name,ts.description,ts.location_id,
                    l.name,l.division,l.city,i.image_urls
                    FROM "Tourist_Spot" ts
                    left join "Location" l
                    on ts.location_id = l.location_id
                    left join "Image" i 
                    on ts.image_id = i.id
                    WHERE ts.category = $1`
    const spots = await pool.query(query,[category]);
    res.json(spots.rows);
})

// @desc    Get Hotels by tourist spot id
// @route   GET /api/touristspot/:id/hotels
// @access  Public

export const getHotelsByTouristSpotId = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const query = `SELECT h.*
                    FROM "Tourist_Spot" ts
                    left join "Location" l
                    on ts.location_id = l.location_id
                    left join "HOTEL" h
                    on h.location_id = l.location_id
                    WHERE ts.id = $1`
    const hotels = await pool.query(query,[id]);
    res.json(hotels.rows);
})

// @desc    Get Events by tourist_spot_id
// @route   GET /api/touristspot/:id/events
// @access  Public

export const getEventsByTouristSpotId = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const query = `SELECT e.*
                    FROM "Tourist_Spot" ts
                    left join "Event" e
                    on e.tourist_spot_id = ts.id
                    WHERE ts.id = $1`
    const events = await pool.query(query,[id]);
    res.json(events.rows);
})

//@desc GET Tour_Pakages by Tourist_Spot_id
//@route GET /api/touristspot/:id/pakages
//@access Public


export const getPackagesByTouristSpotId = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const query = ` SELECT p.*
                    FROM "Tourist_Spot" ts
                    left join "Got" g
                    on g.tourist_spot_id = ts.id
                    left join "Tour_Packages" p
                    on p.id = g.tour_package_id
                    WHERE ts.id = $1`
    const packages = await pool.query(query,[id]);
    res.json(packages.rows);
})

// @desc    Get tourist spot Rwviews
// @route   GET /api/touristspot/:id/reviews
// @access  Public

export const getReviewsByTouristSpotId = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const query = `SELECT r.*
                    FROM "Tourist_Spot" ts
                    left join "Review" r
                    on r.tourist_spot_id = ts.id
                    WHERE ts.id = $1`
    const reviews = await pool.query(query,[id]);
    res.json(reviews.rows);
})

// @desc    Post tourist spot by Reviews
// @route   POST /api/touristspot/:id/reviews
// @access  Private

export const postReviewsByTouristSpotId = asyncHandler(async(req,res)=>{
    const tourist_spot_id = req.params.id;
    const user_id = req.user.user_id;
    const {rating,comment} = req.body;
    if(!rating && !comment){
        res.status(400);
        throw new Error('Please fill  the fields');
    }
    
})


