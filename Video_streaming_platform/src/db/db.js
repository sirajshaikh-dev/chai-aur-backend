import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
import 'dotenv/config'
const connectDB  = async () => {
 try {
    const connectionInstance= await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`)
      // console.log(connectionInstance)
      console.log(`\n MongoDB Connected !! DB Host: 
      ${connectionInstance.connection.host}`)
 } catch (error) {
    console.log('MONGODB connection Failed', error)
    process.exit(1) //process is method of nodejs
 }   
}

export default connectDB