import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import pool from '../config/connectDB.js';



export const protect = asyncHandler(async (req, res, next) => {
   let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
         try {
              token = req.headers.authorization.split(' ')[1];
              console.log("Token :" + token);   
              console.log("JWT_SECRET :" + process.env.JWT_SECRET);
              const decoded = jwt.verify(token, process.env.JWT_SECRET);
               console.log("Decoded :" + decoded);
            const user = await pool.query
            ('SELECT * FROM "User" WHERE user_id = $1',[decoded.id]);
            if(user.rows.length === 0){
                res.status(404);
                throw new Error('User not found');
            }
            console.log(user.rows[0]);
            req.user = user.rows[0]
            next();
         } catch (error) {
              res.status(401);
              throw new Error('Not authorized, token failed');
         }
    }
    if(!token){
         res.status(401);
         throw new Error('Not authorized, no token');
    }
})