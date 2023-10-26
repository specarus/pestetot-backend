import express from "express";

import { deleteLoggedInUser } from "../controllers/profile.js";

const router = express.Router();

router.delete("/:id", deleteLoggedInUser);

export default router;
