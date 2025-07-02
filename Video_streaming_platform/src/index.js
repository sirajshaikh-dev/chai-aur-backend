import 'dotenv/config'
import connectDB from './db/db.js';


connectDB()














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