import express from "express";

import {
  addNewSubCategory,
  getAllSubCategories,
  getSubCategoriesByCategory,
  updateSubCategory,
  deleteSubCategory,
  getSingleEditSubCategory,
} from "../controllers/subcategories.js";

const router = express.Router();

router.get("/edit/:id", getSingleEditSubCategory);

router.get("/", getAllSubCategories);

router.get("/:slug", getSubCategoriesByCategory);

router.post("/", addNewSubCategory);

router.put("/", updateSubCategory);

router.delete("/:id", deleteSubCategory);

export default router;
