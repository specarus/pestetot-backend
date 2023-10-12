import { Schema, model } from "mongoose";

const LansetaSchema = new Schema({
  _id: String,
  title: String,
  slug: String,
  category: String,
  subCategory: String,
  brand: String,
  coverImg: String,
  extraImgs: [String],
  detailsImg: String,
  availability: String,
  options: [
    {
      code: String,
      price: String,
      length: String,
      noElements: String,
      launchWeight: String,
      transportLength: String,
      weight: String,
    },
  ],
  description: String,
  createdAt: Date,
  updatedAt: Date,
});

const Lanseta = model("Lanseta", LansetaSchema);
export default Lanseta;
