import express from "express";

import { deleteUser, getUsers, getSingleUser } from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);

router.get("/:email", getSingleUser);

router.delete("/:id", deleteUser);

export default router;
