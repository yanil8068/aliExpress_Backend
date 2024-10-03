import mongoose from "mongoose";

const imageuploadSchema = new mongoose.Schema(
  {
    image: { url: String, filename: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Imageupload = mongoose.model("Imageupload", imageuploadSchema);

export default Imageupload;
