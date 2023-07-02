import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./middlewares/connectDB";
import authRouter from "./auth/index";
import productRouter from "./products/index";
import cataRouter from "./cata/index";
import orderRouter from "./order/index";
import profileRouter from "./profile/index";
import reviewRouter from "./reviews/index";
import sellerRouter from "./seller/index";

connectDB();
dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());

app.use("/auth", authRouter);
app.use("/products", productRouter);
app.use("/cata", cataRouter);
app.use("/order", orderRouter);
app.use("/profile", profileRouter);
app.use("/review", reviewRouter);
app.use("/seller", sellerRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
