import express from "express";

import { deleteLoggedInUser, getLoggedInUser } from "../controllers/profile.js";

const router = express.Router();

router.get("/", getLoggedInUser);

router.delete("/:id", deleteLoggedInUser);

export default router;
