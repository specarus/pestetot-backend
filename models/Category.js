import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
  _id: String,
  title: String,
  slug: String,
  createdAt: Date,
  updatedAt: Date,
});

const Category = model("Category", CategorySchema);
export default Category;
