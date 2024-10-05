import mongoose from "mongoose";

// Schema for uploading and storing image details
const imageuploadSchema = new mongoose.Schema(
  {
    image: { url: String, filename: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Mongoose model for the Imageupload collection
const Imageupload = mongoose.model("Imageupload", imageuploadSchema);

export default Imageupload;
