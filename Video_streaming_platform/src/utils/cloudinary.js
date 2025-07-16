import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const uploadOnCloudinary= async (localFilepath) => {
    try {
        if(!localFilepath) return null
        //upload file 
        const response= await cloudinary.uploader.upload(localFilepath,{
            resource_type:"auto",
        })
        console.log(`File uploaded: ${response.url}`)
        return response
    } catch (error) {
        fs.unlinkSync(localFilepath) // remove the locally saved temporary file as the upload operation got failed
        return null
    }
}

export {uploadOnCloudinary}