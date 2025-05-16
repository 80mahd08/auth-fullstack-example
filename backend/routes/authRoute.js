import { Router } from "express";
import { compare, hash } from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { config } from "dotenv";

config();

const authRoutes = Router();

// Register
authRoutes.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await hash(password, 12);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(201).json({ user, token });
  } catch (error) {
    console.error("Registration error:", error); // Add this for debugging
    res.status(500).json({
      message: "Something went wrong",
      error: error.message || error,
    });
  }
});

// Login
authRoutes.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isPasswordCorrect = await compare(password, user.password);
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({ user, token });
  } catch (error) {
    console.error("Registration error:", error); // Add this for debugging
    res.status(500).json({
      message: "Something went wrong",
      error: error.message || error,
    });
  }
});

export default authRoutes;
