import { Schema, model } from "mongoose";

const MulinetaSchema = new Schema({
  _id: String,
  title: String,
  slug: String,
  description: String,
  category: String,
  subCategory: String,
  brand: String,
  coverImg: String,
  availability: String,
  detailsImg: String,
  extraImgs: [String],
  options: [
    {
      code: String,
      price: String,
      size: String,
      noBearing: String,
      brakingSystem: String,
      recoveryReport: String,
      material: String,
      drum: String,
      drumCapacity: String,
      weight: String,
    },
  ],
  createdAt: Date,
  updatedAt: Date,
});

const Mulineta = model("Mulineta", MulinetaSchema);
export default Mulineta;
