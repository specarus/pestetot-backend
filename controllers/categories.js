import mongoose from "mongoose";
import Category from "../models/Category.js";

const getAllCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

const getCategoriesBySlug = async (req, res) => {
  const slug = req.params.slug;
  const category = await Category.findOne().where({ slug: slug });
  res.json(category);
};

const addNewCategory = async (req, res) => {
  const category = req.body;
  const { title, slug } = category;

  const newCategory = await Category.create({
    _id: new mongoose.Types.ObjectId(),
    title,
    slug,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  });

  await newCategory.save();
  res.json({ status: "ok" });
};

const getSingleEditCategory = async (req, res) => {
  const id = req.params.id;
  const category = await Category.findOne({ _id: id });
  res.json(category);
};

const updateCategory = async (req, res) => {
  const category = req.body;
  await Category.updateOne({ _id: category._id }, category);
  res.json({ status: "ok" });
};

const deleteCategory = async (req, res) => {
  const id = req.params.id;
  if (id) {
    await Category.deleteOne({ _id: id });
    res.json({ status: "ok" });
  }
};

export {
  getAllCategories,
  getCategoriesBySlug,
  addNewCategory,
  updateCategory,
  deleteCategory,
  getSingleEditCategory,
};
