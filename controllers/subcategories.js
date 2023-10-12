import SubCategory from "../models/SubCategory.js";
import mongoose from "mongoose";

const getAllSubCategories = async (req, res) => {
  const subCategories = await SubCategory.find();
  res.json(subCategories);
};

const getSubCategoriesByCategory = async (req, res) => {
  const slug = req.params.slug;
  const subcategories = await SubCategory.find().where({ category: slug });
  res.json(subcategories);
};

const addNewSubCategory = async (req, res) => {
  const subCategory = req.body;
  const { title, slug, category } = subCategory;

  const newSubCategory = await SubCategory.create({
    _id: new mongoose.Types.ObjectId(),
    title,
    slug,
    category,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  });

  await newSubCategory.save();
  res.json({ status: "ok" });
};

const getSingleEditSubCategory = async (req, res) => {
  const id = req.params.id;
  const subCategory = await SubCategory.findOne({ _id: id });
  res.json(subCategory);
};

const updateSubCategory = async (req, res) => {
  const subCategory = req.body;
  await SubCategory.updateOne({ _id: subCategory._id }, subCategory);
  res.json({ status: "ok" });
};

const deleteSubCategory = async (req, res) => {
  const id = req.params.id;
  if (id) {
    await SubCategory.deleteOne({ _id: id });
    res.json({ status: "ok" });
  }
};

export {
  getSubCategoriesByCategory,
  getAllSubCategories,
  addNewSubCategory,
  updateSubCategory,
  deleteSubCategory,
  getSingleEditSubCategory,
};
