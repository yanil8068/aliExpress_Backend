import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connect to db");
  } catch (error) {
    console.log("Error connecting to db", error);
  }
};

export default connectDB;
