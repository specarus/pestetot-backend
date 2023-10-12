import Brand from "../models/Brand.js";
import mongoose from "mongoose";

const getAllBrands = async (req, res) => {
  const brands = await Brand.find();
  res.json(brands);
};

const getSingleBrandsPageBrand = async (req, res) => {
  const brandSlug = req.params.brand;
  const brand = await Brand.findOne({ slug: brandSlug });
  res.json(brand);
};

const addNewBrand = async (req, res) => {
  const brand = req.body;
  const { title, img, slug, category } = brand;

  const newBrand = await Brand.create({
    _id: new mongoose.Types.ObjectId(),
    title,
    img,
    slug,
    category,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  });

  await newBrand.save();
  res.json({ status: "ok" });
};

const getSingleEditBrand = async (req, res) => {
  const id = req.params.id;
  const brand = await Brand.findOne({ _id: id });
  res.json(brand);
};

const updateBrand = async (req, res) => {
  const brand = req.body;
  await Brand.updateOne({ _id: brand._id }, brand);
  res.json({ status: "ok" });
};

const deleteBrand = async (req, res) => {
  const id = req.params.id;
  if (id) {
    await Brand.deleteOne({ _id: id });
    res.json({ status: "ok" });
  }
};

export {
  getAllBrands,
  addNewBrand,
  updateBrand,
  deleteBrand,
  getSingleEditBrand,
  getSingleBrandsPageBrand,
};
