import mongoose from "mongoose";

import Lanseta from "../models/Lanseta.js";
import Mulineta from "../models/Mulineta.js";
import Carlig from "../models/Carlig.js";
import Fir from "../models/Fir.js";

const getAllProducts = async (req, res) => {
  const lansete = await Lanseta.find();
  const mulinete = await Mulineta.find();
  const fire = await Fir.find();
  const carlige = await Carlig.find();
  const products = [...lansete, ...mulinete, ...fire, ...carlige];
  res.json(products);
};

const getProductsByCategory = async (req, res) => {
  const category = req.params.slug;
  if (category === "lansete") {
    const products = await Lanseta.find();
    res.json(products);
  } else if (category === "mulinete") {
    const products = await Mulineta.find();
    res.json(products);
  } else if (category === "fire") {
    const products = await Fir.find();
    res.json(products);
  } else if (category === "carlige") {
    const products = await Carlig.find();
    res.json(products);
  }
};

const getSingleProduct = async (req, res) => {
  const category = req.params.category;
  const subCategory = req.params.subCategory;
  const productSlug = req.params.productSlug;
  if (category === "lansete") {
    const product = await Lanseta.findOne({
      category: category,
      subCategory: subCategory,
      slug: productSlug,
    });
    res.json(product);
  } else if (category === "mulinete") {
    const product = await Mulineta.findOne({
      category: category,
      subCategory: subCategory,
      slug: productSlug,
    });
    res.json(product);
  } else if (category === "fire") {
    const product = await Fir.findOne({
      category: category,
      subCategory: subCategory,
      slug: productSlug,
    });
    res.json(product);
  } else if (category === "carlige") {
    const product = await Carlig.findOne({
      category: category,
      subCategory: subCategory,
      slug: productSlug,
    });
    res.json(product);
  }
};

const getSingleEditProduct = async (req, res) => {
  const category = req.params.category;
  const id = req.params.id;

  if (category === "lansete") {
    const product = await Lanseta.findOne({
      _id: id,
      category: category,
    });
    res.json(product);
  } else if (category === "mulinete") {
    const product = await Mulineta.findOne({
      _id: id,
      category: category,
    });
    res.json(product);
  } else if (category === "fire") {
    const product = await Fir.findOne({
      _id: id,
      category: category,
    });
    res.json(product);
  } else if (category === "carlige") {
    const product = await Carlig.findOne({
      _id: id,
      category: category,
    });
    res.json(product);
  }
};

const getProductsByCategoryAndSubCategory = async (req, res) => {
  const category = req.params.category;
  const subCategory = req.params.subCategory;
  if (category === "lansete") {
    const products = await Lanseta.find().where({
      category: category,
      subCategory: subCategory,
    });
    res.json(products);
  } else if (category === "mulinete") {
    const products = await Mulineta.find().where({
      category: category,
      subCategory: subCategory,
    });
    res.json(products);
  } else if (category === "fire") {
    const products = await Fir.find().where({
      category: category,
      subCategory: subCategory,
    });
    res.json(products);
  } else if (category === "carlige") {
    const products = await Carlig.find().where({
      category: category,
      subCategory: subCategory,
    });
    res.json(products);
  }
};

const addNewProduct = async (req, res) => {
  const productCategory = req.params.category;
  const product = req.body;

  if (productCategory === "lansete") {
    const {
      title,
      slug,
      category,
      subCategory,
      description,
      brand,
      availability,
      coverImg,
      extraImgs,
      options,
      detailsImg,
    } = product;

    const newLanseta = await Lanseta.create({
      _id: new mongoose.Types.ObjectId(),
      title,
      slug,
      description,
      coverImg,
      detailsImg,
      options,
      category,
      extraImgs,
      subCategory,
      brand,
      availability,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    await newLanseta.save();
  } else if (productCategory === "mulinete") {
    const {
      title,
      slug,
      description,
      extraImgs,
      coverImg,
      brand,
      detailsImg,
      options,
      category,
      availability,
      subCategory,
    } = product;

    const newMulineta = await Mulineta.create({
      _id: new mongoose.Types.ObjectId(),
      title,
      slug,
      description,
      extraImgs,
      coverImg,
      brand,
      availability,
      options,
      detailsImg,
      category,
      subCategory,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    await newMulineta.save();
  } else if (productCategory === "fire") {
    const {
      title,
      slug,
      category,
      subCategory,
      description,
      brand,
      availability,
      coverImg,
      options,
      detailsImg,
      extraImgs,
    } = product;

    const newFir = await Fir.create({
      _id: new mongoose.Types.ObjectId(),
      title,
      slug,
      description,
      coverImg,
      detailsImg,
      extraImgs,
      brand,
      availability,
      options,
      category,
      subCategory,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    await newFir.save();
  } else if (productCategory === "carlige") {
    const {
      title,
      slug,
      category,
      subCategory,
      description,
      brand,
      detailsImg,
      availability,
      coverImg,
      options,
      extraImgs,
    } = product;

    const newCarlig = await Carlig.create({
      _id: new mongoose.Types.ObjectId(),
      title,
      slug,
      description,
      coverImg,
      detailsImg,
      brand,
      availability,
      options,
      extraImgs,
      category,
      subCategory,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    await newCarlig.save();
  }

  res.json({ status: "ok" });
};

const updateProduct = async (req, res) => {
  const category = req.params.category;
  const product = req.body;

  if (category === "lansete") {
    await Lanseta.updateOne({ _id: product._id }, product);
  } else if (category === "mulinete") {
    await Mulineta.updateOne({ _id: product._id }, product);
  } else if (category === "fire") {
    await Fir.updateOne({ _id: product._id }, product);
  } else if (category === "carlige") {
    await Carlig.updateOne({ _id: product._id }, product);
  }
  res.json({ status: "ok" });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const category = req.params.category;
  if (id) {
    if (category === "lansete") {
      await Lanseta.deleteOne({ _id: id });
    } else if (category === "mulinete") {
      await Mulineta.deleteOne({ _id: id });
    } else if (category === "fire") {
      await Fir.deleteOne({ _id: id });
    } else if (category === "carlige") {
      await Carlig.deleteOne({ _id: id });
    }
    res.json({ status: "ok" });
  }
};

const getProductsByBrand = async (req, res) => {
  const brandTitle = req.params.brand;
  const lansete = await Lanseta.find().where({ brand: brandTitle });
  const mulinete = await Mulineta.find().where({ brand: brandTitle });
  const fire = await Fir.find().where({ brand: brandTitle });
  const carlige = await Carlig.find().where({ brand: brandTitle });
  const products = [...lansete, ...mulinete, ...fire, ...carlige];
  res.json(products);
};

export {
  getProductsByCategory,
  getSingleProduct,
  getProductsByCategoryAndSubCategory,
  getAllProducts,
  addNewProduct,
  updateProduct,
  deleteProduct,
  getSingleEditProduct,
  getProductsByBrand,
};
