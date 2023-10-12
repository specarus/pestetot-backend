import { Schema, model } from "mongoose";

const SubCategorySchema = new Schema({
  _id: String,
  title: String,
  slug: String,
  category: String,
  createdAt: Date,
  updatedAt: Date,
});

const SubCategory = model("SubCategory", SubCategorySchema);
export default SubCategory;
