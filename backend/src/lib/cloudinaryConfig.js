import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || dhgpdmvgg,
  api_key: process.env.CLOUDINARY_API_KEY || 764414255311723,
  api_secret: process.env.CLOUDINARY_API_SECRET || MxGioeN7TTfNY4LEcG-kqw2wwjk,
  
});

export default cloudinary;
