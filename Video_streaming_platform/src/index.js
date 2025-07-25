import dotenv from 'dotenv';
import connectDB from './db/db.js';
import { app } from './app.js';

dotenv.config({
    path:'./.env'
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`Server is running at port: ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log('MongoDB connection failed',error)
})



/*First Approach: IIFE async DB connect function with try/catch
import express from 'express';
import mongoose from 'mongoose';
import { DB_NAME } from './constant';
const app = express();

(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('Error',(error)=>{
            console.log("Error occurred:", error);
            throw error;
        })

        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on port${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);   

    }
})()
*/