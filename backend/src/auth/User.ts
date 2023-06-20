import mongoose from "mongoose";
import { Schema, Document, Types } from "mongoose";
import { UserType } from "../types";

const userSchema: Schema = new Schema<UserType>({
  email: { type: String, required: true },
  password: { type: String, required: true },
  seller: { type: Boolean, default: false },
  profile: { type: Schema.Types.ObjectId, ref: "Profile" },
  created: { type: Date, default: Date.now },
});

const User = mongoose.model<UserType>("User", userSchema);

export default User;
