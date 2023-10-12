import express from "express";

// Controllers
import {
  getProductsByCategory,
  getSingleProduct,
  getProductsByCategoryAndSubCategory,
  addNewProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getSingleEditProduct,
  getProductsByBrand,
} from "../controllers/products.js";

const router = express.Router();

router.get("/", getAllProducts);

router.get("/edit/:category/:id", getSingleEditProduct);

router.get("/brands/:brand", getProductsByBrand);

router.get("/:slug", getProductsByCategory);

router.get("/:category/:subCategory/:productSlug", getSingleProduct);

router.get("/:category/:subCategory", getProductsByCategoryAndSubCategory);

router.post("/:category", addNewProduct);

router.put("/:category", updateProduct);

router.delete("/:category/:id", deleteProduct);

export default router;
