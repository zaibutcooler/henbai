import { Schema, model, Types } from "mongoose";
import { ProductType } from "../types";

const productSchema = new Schema<ProductType>({
  title: { type: String, required: true },
  seller: { type: Types.ObjectId, ref: "Profile", required: true },
  type: { type: Types.ObjectId, ref: "CataType", required: true },
  reviews: [{ type: Types.ObjectId, ref: "Review" }],
  description: { type: String, required: true },
  price: { type: Number, required: true },
  images: { type: [String], required: true },
  instock: { type: Boolean, required: true },
  delay: { type: String, required: true },
  count: { type: Number, required: true },
});

const ProductModel = model<ProductType>("Product", productSchema);

export default ProductModel;
