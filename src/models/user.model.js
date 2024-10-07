// import mongoose from "mongoose";
// import bcrypt from "bcryptjs"; // Import bcrypt for password hashing and comparison

// // Schema for user details
// const userSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     mobileNumber: { type: Number, required: false },
//     role: {
//       type: String,
//       enum: ["user", "admin", "super-admin"],
//       default: "user",
//     },
//     profilePicture: { type: String, required: false },
//     resume: { type: String, required: false },
//   },
//   {
//     timestamps: true,
//     versionKey: false,
//   }
// );

// // Middleware to hash the password before saving the user document
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   }
//   try {
//     const salt = await bcrypt.genSaltSync(10);
//     this.password = await bcrypt.hash(this.password, salt);
//   } catch (error) {
//     console.log("Error hashing password", error);
//     next(error);
//   }
// });

// // Method to compare entered password with the hashed password
// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compareSync(enteredPassword, this.password);
// };

// // Export the User model
// const User = mongoose.model("User", userSchema);

// export default User;

import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobileNumber: { type: Number, required: false },
    role: {
      type: String,
      enum: ["user", "admin", "super-admin"],
      default: "user",
    },
    profilePicture: { type: String, required: false },
    resume: { type: String, required: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//When you are saving a user document, if the password hasn’t been changed, there’s no need to re-hash the password.
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  try {
    const salt = await bcrypt.genSaltSync(10); //The 10 refers to the salt rounds (a security measure). Salt is random data added to the password before hashing to ensure uniqueness.
    this.password = await bcrypt.hash(this.password, salt); //hashing password with salt
  } catch (error) {
    console.log("Error hashing password", error);
    next(error);
  }
});

//This method is used during the login process to compare the plain text password entered by the user with the hashed password stored in the database.
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compareSync(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
