import Model from "./User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import User from "./User";

import dotenv from "dotenv";
dotenv.config();

const secretKey = String(process.env.SECERT_KEY);

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const validUser = await Model.findOne({ email });
    if (!validUser) {
      return res.status(401).json({ message: "Invalid email" });
    }
    const validPassword = await bcrypt.compare(password, validUser.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    const token = jwt.sign({ userId: validUser._id }, secretKey, {
      expiresIn: "1hr",
    });
    res.status(200).json(token);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password should be at least 6 characters long" });
    }
    const alreadyExist = await Model.findOne({ email });
    if (alreadyExist) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateProfile = async (req: Request, res: Response) => {};

export const addProfile = async (req: Request, res: Response) => {};
