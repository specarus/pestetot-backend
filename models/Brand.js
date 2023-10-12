import { Schema, model } from "mongoose";

const BrandSchema = new Schema({
  _id: String,
  title: String,
  category: String,
  slug: String,
  img: String,
  createdAt: Date,
  updatedAt: Date,
});

const Brand = model("Brand", BrandSchema);
export default Brand;
