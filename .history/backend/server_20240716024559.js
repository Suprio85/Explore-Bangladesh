import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
//database connection
import pool from './config/connectDB.js';

// Routers files
import userRouter from './Routers/userRouter.js';
import locationRouter from './Routers/locationRouter.js';
import touristSpotRouter from './Routers/touristspotRouter.js';
import categoryRouter from './Routers/categoryRouter.js';
import tourPackageRouter from './Routers/tourPackageRouter.js';
import orderRouter from './Routers/orderRouter.js';


// middlewares
import { errHandeler } from './middlewares/errorhandler.js';

dotenv.config();
const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5000',
    credentials: true
  }));
app.use(morgan('dev'));
  



// Routers
app.use('/api/user', userRouter);  //Register , Login, userprofile and Logout
app.use('/api/location',locationRouter);
app.use('/api/touristspot',touristSpotRouter);
app.use('/api/category',categoryRouter);
app.use('/api/tp',tourPackageRouter);  // tp as tour package
app.use('/api/order',orderRouter);





app.use(errHandeler);

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.bgYellow.green.bold)
);

