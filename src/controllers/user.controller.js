// import User from "../models/user.model.js";
// import { createToken } from "../utilities/jwt.js";

// // Register a new user
// const register = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     const user = await User.create({
//       name,
//       email,
//       password,
//     });
//     return res.status(201).send({ message: "User registered successfully" });
//   } catch (error) {
//     return res
//       .status(500)
//       .send({ message: "Error registering user", error: error.message });
//   }
// };

// // User login
// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).send({ message: "Invalid credentials" });
//     }
//     const passwordMatch = await user.matchPassword(password);
//     if (!passwordMatch) {
//       return res.status(400).send({ message: "Imvalid Credentials" });
//     }
//     const token = createToken({ id: user.id });
//     res.cookie("authToken", token, {
//       path: "/",
//       expires: new Date(Date.now() + 3600000),
//       secure: true,
//       httpOnly: true,
//       sameSite: "None",
//     });
//     return res
//       .status(200)
//       .send({ message: "User logged in successfully", token });
//   } catch (error) {
//     return res
//       .status(500)
//       .send({ message: "Error in logging the user", error: error.message });
//   }
// };

// // User logout
// const logout = async (req, res) => {
//   try {
//     res.clearCookie("authToken");
//     return res.status(200).send({ message: "User logged out successfully" });
//   } catch (error) {
//     return res.status(500).send({ message: "User logged out failed" });
//   }
// };

// const deleteUser = async (req, res) => {
//   try {
//     console.log(req.user);
//     const { id } = req.params;
//     const user = await User.findByIdAndDelete(id);
//     if (!user) {
//       return res.status(404).send({ message: "User not found" });
//     }
//     return res.status(200).send({ message: "User deleted sucessfully" });
//   } catch (error) {
//     return res.status(500).send({ message: "User delete failed" });
//   }
// };

// // Get user profile
// const getUserProfile = async (req, res) => {
//   try {
//     const user = req.user; // `req.user` is set by the authentication middleware
//     if (!user) {
//       return res.status(404).send({ message: "User not found" });
//     }
//     return res.status(200).send({ user });
//   } catch (error) {
//     return res
//       .status(500)
//       .send({ message: "Error fetching user profile", error: error.message });
//   }
// };

// export { register, login, logout, deleteUser, getUserProfile };

import User from "../models/user.model.js";
import { createToken } from "../utilities/jwt.js";

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password,
    });
    return res.status(201).send({ message: "User registered successfully" });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error registering user", error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: "Invalid credentials email" });
    }
    const passwordMatch = await user.matchPassword(password);
    if (!passwordMatch) {
      return res.status(400).send({ message: "Imvalid Credentials password" });
    }
    const token = createToken({ id: user.id }); //jwt.sign used with id secret and expires in
    res.cookie("authToken", token, {
      path: "/",
      expires: new Date(Date.now() + 3600000), // Expires in 1 hour 3600000 milliseconds
      secure: true,
      httpOnly: true, //By marking cookies as HttpOnly, you reduce the risk of XSS attacks.
      sameSite: "None", //security
    });
    return res
      .status(200)
      .send({ message: "User logged in successfully", token });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error in logging the user", error: error.message });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("authToken");
    return res.status(200).send({ message: "User logged out successfully" });
  } catch (error) {
    return res.status(500).send({ message: "User logged out failed" });
  }
};

const deleteUser = async (req, res) => {
  try {
    // console.log(req.user);
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    return res.status(200).send({ message: "User deleted sucessfully" });
  } catch (error) {
    return res.status(500).send({ message: "User delete failed" });
  }
};

const getUserProfile = async (req, res) => {
  try {
    const user = req.user; // `req.user` is set by the authentication middleware
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    return res.status(200).send({ user });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error fetching user profile", error: error.message });
  }
};

export { register, login, logout, deleteUser, getUserProfile };
