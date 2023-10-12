import { Schema, model } from "mongoose";

const FireSchema = new Schema({
  _id: String,
  title: String,
  slug: String,
  category: String,
  coverImg: String,
  description: String,
  availability: String,
  brand: String,
  extraImgs: [String],
  detailsImg: String,
  options: [
    {
      code: String,
      color: String,
      diameter: String,
      price: String,
      stringResistance: String,
      length: String,
    },
  ],
  subCategory: String,
  createdAt: Date,
  updatedAt: Date,
});

const Fire = model("Fire", FireSchema);
export default Fire;
