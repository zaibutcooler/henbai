import { Schema, model, Types } from "mongoose";
import { ProfileType } from "../types";

const profileSchema = new Schema<ProfileType>({
  user: { type: Types.ObjectId, ref: "User", required: true },
  image: { type: String },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  isSeller: { type: Boolean, required: true },
  seller: { type: Types.ObjectId, ref: "Seller" },
  dob: { type: Date, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
});

const ProfileModel = model<ProfileType>("Profile", profileSchema);

export default ProfileModel;
