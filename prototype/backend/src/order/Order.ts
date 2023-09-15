import { Schema, model, Types } from "mongoose";
import { OrderType } from "../types";

const orderSchema = new Schema<OrderType>({
  product: { type: Types.ObjectId, ref: "Product", required: true },
  buyer: { type: Types.ObjectId, ref: "Profile", required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  location: { type: String, required: true },
  contactAddress: { type: [String], required: true },
  count: { type: Number, required: true },
  paid: { type: Boolean, required: true },
});

const OrderModel = model<OrderType>("Order", orderSchema);

export default OrderModel;
