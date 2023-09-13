import { Schema, model, Types } from "mongoose";
import { SellerType } from "../types";

const sellerSchema = new Schema<SellerType>({
  user: { type: Types.ObjectId, ref: "User", required: true },
  description: { type: String, required: true },
  contactInfo: {
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
  },
  socialMedia: {
    facebook: { type: String },
    twitter: { type: String },
    instagram: { type: String },
  },
  products: [{ type: Types.ObjectId, ref: "Product" }],
  orders: [{ type: Types.ObjectId, ref: "Order" }],
  profileReviews: [{ type: Types.ObjectId, ref: "Review" }],
});

const SellerModel = model<SellerType>("Seller", sellerSchema);

export default SellerModel;
