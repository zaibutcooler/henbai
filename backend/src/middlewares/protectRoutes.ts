import jwt from "jsonwebtoken";
import Model from "../auth/User";
import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";

const secretKey = String(process.env.SECRET_KEY);

const protectRoutes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(400).json({ message: "Need token!!" });
    }
    if (token) {
      const valid = jwt.verify(token, secretKey) as { _id: string };
      if (!valid) {
        res.status(400).json({ message: "A valid token is required" });
      }
    }
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

export default protectRoutes;
