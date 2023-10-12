import { Schema, model } from "mongoose";

const CarligSchema = new Schema({
  _id: String,
  title: String,
  slug: String,
  category: String,
  coverImg: String,
  detailsImg: String,
  description: String,
  availability: String,
  brand: String,
  extraImgs: [String],
  options: [
    {
      code: String,
      color: String,
      price: String,
      packingWay: String,
      size: String,
    },
  ],
  subCategory: String,
  createdAt: Date,
  updatedAt: Date,
});

const Carlig = model("Carlig", CarligSchema);
export default Carlig;
