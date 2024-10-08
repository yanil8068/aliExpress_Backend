// Importing dependencies
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import userRouter from "./src/routes/user.routes.js";
import cookieParser from "cookie-parser";
import categoryRouter from "./src/routes/category.routes.js";
import productRouter from "./src/routes/product.routes.js";
// import cartRouter from "./src/routes/cart.routes.js";
import cartRouter from "./src/routes/cart.routes.js";
dotenv.config(); // Load environment variables from the .env file

// Image upload dependencies
import multer from "multer";
import { storage } from "./cloudConfig.js";
import Imageupload from "./src/models/imageupload.model.js";

// Configure multer for file uploads with specified storage settings
const upload = multer({ storage });
// imageupload

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use("/api/user", userRouter);
app.use("/api/category", categoryRouter);
app.use("/api/product", productRouter);
// app.use("/api/cart", cartRouter);
app.use("/api/cart", cartRouter);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the aliExpress");
});

const PORT = process.env.PORT || 8000;

// app.listen(PORT, () => {
//   connectDB();
//   console.log(`Server is listening on port ${PORT}`);
// });
connectDB();
export default app;
