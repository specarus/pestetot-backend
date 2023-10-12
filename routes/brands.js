import express from "express";

import {
  addNewBrand,
  deleteBrand,
  getAllBrands,
  getSingleEditBrand,
  updateBrand,
  getSingleBrandsPageBrand,
} from "../controllers/brands.js";

const router = express.Router();

router.get("/edit/:id", getSingleEditBrand);

router.get("/single/:brand", getSingleBrandsPageBrand);

router.get("/", getAllBrands);

router.post("/", addNewBrand);

router.put("/", updateBrand);

router.delete("/:id", deleteBrand);

export default router;
