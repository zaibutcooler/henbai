import { Schema, model, Document } from "mongoose";
import { CataType } from "../types";

const cataTypeSchema = new Schema<CataType>({
  name: { type: String, required: true },
  big: { type: Boolean, required: true },
  enhance: { type: Boolean, required: true },
});

const CataTypeModel = model<CataType>("CataType", cataTypeSchema);

export default CataTypeModel;
