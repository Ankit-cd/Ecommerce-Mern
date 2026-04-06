import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { use } from "react";



// register

const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    if (!userName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    } else {
      const hashedPassword = bcrypt.hashSync(password, 10);
      const newUser = new User({
        username: userName,
        email,
        password: hashedPassword,
      });
      await newUser.save();
      res.status(201).json({
        success: true,
        message: "User registered successfully",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};



module.exports = {
  registerUser,
};
