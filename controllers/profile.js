import User from "../models/User.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

// JWT secret
const jwtSecret = process.env.JWT_SECRET;

const getLoggedInUser = async (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const user = await User.findOne({ _id: userData._id });
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

const deleteLoggedInUser = async (req, res) => {
  const { id } = req.params;

  if (id) {
    await User.deleteOne({ _id: id });
    res.cookie("token", "").json({ status: "ok" });
  }
};

export { getLoggedInUser, deleteLoggedInUser };
