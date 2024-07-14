import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import asyncHandler from 'express-async-handler'
import {generateToken} from '../utils/generateToken.js'
import pool from '../config/connectDB.js'


// @desc    Register a new user
// @route   POST /api/user
// @access  Public
export const registerUser = asyncHandler(async(req,res)=>{
    console.log(req.body);
    let {name,email,password,confirm_password,country,division,city,street,postal_code} = req.body;
    if(!name || !email || !password || !country || !confirm_password){
        res.status(400);
        throw new Error('Please fill all the necessary fields');
    }

    if(password !== confirm_password){
        res.status(400);
        throw new Error('Password does not match');
    }

    division = division || null;
    city = city || null;
    street = street || null;
    postal_code = postal_code || null;

    const user = await pool.query('SELECT * FROM "User" WHERE email = $1',[email]);
    if(user.rows.length > 0){
        res.status(400);
        throw new Error('User already exists');
    }
    const adress =await pool.query('INSERT INTO "Adress" (country,division,city,street,postal_code) VALUES ($1,$2,$3,$4,$5) RETURNING *',[country,division,city,street,postal_code]);
    if(adress.rows.length === 0){
        res.status(400);
        throw new Error('Adress not inserted');
    }
    console.log(adress.rows[0]);
   
    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password,salt);
    const newUser = await pool.query('INSERT INTO "User" (name,email,password,adress_id) VALUES ($1,$2,$3,$4) RETURNING *',[name,email,bcryptPassword,adress.rows[0].id]);
    console.log(newUser.rows[0]);
    if(newUser.rows.length === 0){
        res.status(400);
        throw new Error('User register unsuccessfull');
    }

    const token = generateToken(res,newUser.rows[0].id);
    res.status(201).json({id:newUser.rows[0].user_id,name:newUser.rows[0].name,email:newUser.rows[0].email,token});
})

// @desc    Login user
// @route   POST /api/user/login
// @access  Public


export const loginUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error('Please fill all the fields');
    }
    const user = await pool.query('SELECT * FROM "User" WHERE email = $1',[email]);
    if(user.rows.length === 0){
        res.status(404);
        throw new Error('User not found. Please register first');
    }
    const isMatch = await bcrypt.compare(password,user.rows[0].password);
    if(!isMatch){
        res.status(401);
        throw new Error('Invalid password or email');
    }
    const token = generateToken(res,user.rows[0].user_id);
    res.status(200).json({id:user.rows[0].user_id,name:user.rows[0].name,email:user.rows[0].email,token});
})


// @desc    Get user profile
// @route   GET /api/user/profile
// @access  Private

export const getUserProfile = asyncHandler(async(req,res)=>{
    const user = await pool.query('SELECT * FROM "User" WHERE user_id = $1',[req.user.user_id]);
    if(user.rows.length === 0){
        res.status(404);
        throw new Error('User not found');
    }
    res.status(200).json(user.rows[0]);
})

// @desc   Update user profile
// @route  PUT /api/user/profile
// @access Private




export const updateUserProfile = asyncHandler(async(req,res)=>{
    const {name,email,password,division} = req.body;
    if(!name && !email && !password && !division){
        res.status(400);
        throw new Error('Please fill any field to update');
    }
    const user = await pool.query('SELECT * FROM "User" WHERE user_id = $1',[req.user.user_id]);
    if(user.rows.length === 0){
        res.status(404);
        throw new Error('User not found');
    }
    const updateField =[];
    let updateQuery = 'UPDATE "User" SET ';

    if(name){
        updateField.push(name);
        updateQuery += `name = $${updateField.length},`;
    }
    if(email){
        updateField.push(email);
        updateQuery += `email = $${updateField.length},`;
    }
    if(password){
        const salt = await bcrypt.genSalt(10);
        const bcryptPassword = await bcrypt.hash(password,salt);
        updateField.push(bcryptPassword);
        updateQuery += `password = $${updateField.length},`;
    }
    if(division){
        const location_id = await pool.query('SELECT location_id FROM "Location" WHERE division ILIKE $1',[division]);
        if(location_id.rows.length === 0){
            res.status(404);
            throw new Error('Division not found');
        }
        updateField.push(location_id.rows[0].location_id);
        updateQuery += `location_id = $${updateField.length},`;
    }

    updateQuery = updateQuery.slice(0,updateQuery.length-1);
    updateQuery += ` WHERE user_id = $${updateField.length+1} RETURNING *`;
    updateField.push(req.user.user_id);
    console.log(updateQuery);
    console.log(updateField);
    const updatedUser = await pool.query(updateQuery,updateField);
    
    if(updatedUser.rows.length === 0){
        res.status(400);
        throw new Error('User update unsuccessfull');
    }
    res.status(200).json(updatedUser.rows[0]);
})


// @desc   logout user
// @route  GET /api/user/logout
// @access Private

export const logoutUser = asyncHandler(async(req,res)=>{
    res.cookie('token','none',{
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true
    });
    res.status(200).json({message:'Logout successfull'});
})