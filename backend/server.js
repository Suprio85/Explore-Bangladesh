import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

dotenv.config();
const app = express();







const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.bgYellow.green.bold)
);

