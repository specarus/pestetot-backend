import express from "express";

import {
  addNewCategory,
  getAllCategories,
  getCategoriesBySlug,
  updateCategory,
  deleteCategory,
  getSingleEditCategory,
} from "../controllers/categories.js";

const router = express.Router();

router.get("/edit/:id", getSingleEditCategory);

router.get("/", getAllCategories);

router.get("/:slug", getCategoriesBySlug);

router.post("/", addNewCategory);

router.put("/", updateCategory);

router.delete("/:id", deleteCategory);

export default router;
