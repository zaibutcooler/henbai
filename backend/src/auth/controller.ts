import Model from "./User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import User from "./User";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
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
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateProfile = async (req: Request, res: Response) => {};

export const addProfile = async (req: Request, res: Response) => {};
