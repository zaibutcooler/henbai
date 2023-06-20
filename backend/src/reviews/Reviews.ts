import { Schema, model, Types } from "mongoose";
import { ReviewType } from "../types";

const reviewSchema = new Schema<ReviewType>({
  isProduct: { type: Boolean, required: true },
  writer: { type: Types.ObjectId, ref: "Profile", required: true },
  rating: { type: Number, required: true },
  body: { type: String, required: true },
});

const ReviewModel = model<ReviewType>("Review", reviewSchema);

export default ReviewModel;
