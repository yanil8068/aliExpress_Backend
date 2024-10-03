// const cloudinary = require("cloudinary").v2;
// const { CloudinaryStorage } = require("multer-storage-cloudinary");

// cloudConfig.js (use ES6 exports)
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import { CloudinaryStorage } from "multer-storage-cloudinary";

dotenv.config(); // Ensure environment variables are loaded

console.log("process.env.CLOUD_NAME", process.env.CLOUD_NAME);
console.log("process.env.CLOUD_API_KEY", process.env.CLOUD_API_KEY);
console.log("process.env.CLOUD_API_SECRET", process.env.CLOUD_API_SECRET);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "wanderlust_DEV",
    allowedFormats: ["png", "jpg", "jpeg"],
  },
});

export { cloudinary, storage };
