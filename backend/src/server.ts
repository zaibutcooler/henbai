import express from "express";
import dotenv from "dotenv";
import connectDB from "./middlewares/connectDB";
import authRouter from "./auth/index";

connectDB();
dotenv.config();

const app = express();
app.use(express.json());

app.use("/auth", authRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
