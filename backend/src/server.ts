import express from "express";
import dotenv from "dotenv";
import connectDB from "./middlewares/connectDB";
import authRouter from "./auth/index";
import productRouter from "./products/index";
import cataRouter from "./cata/index";
import orderRouter from "./order/index";
import profileRouter from "./profile/index";
import reviewRouter from "./reviews/index";
import sellerRouter from "/seller/index";

connectDB();
dotenv.config();

const app = express();
app.use(express.json());

app.use("/auth", authRouter);
app.use("/products", productRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
