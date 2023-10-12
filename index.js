import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

// Models
import User from "./models/User.js";

// Routes
import productRoutes from "./routes/products.js";
import categoryRoutes from "./routes/categories.js";
import subCategoryRoutes from "./routes/subcategories.js";
import brandRoutes from "./routes/brands.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import profileRoutes from "./routes/profile.js";

// Configurations
const app = express();
dotenv.config();
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(cookieParser());

// Routes
app.use("/", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/subcategories", subCategoryRoutes);
app.use("/api/brands", brandRoutes);
app.use("/api/users", userRoutes);
app.use("/profile", profileRoutes);
app.use("/api/products", productRoutes);

// Authentication

// JWT secret
const jwtSecret = process.env.JWT_SECRET;

// Personal information
app.put("/api/personal", (req, res) => {
  const { token } = req.cookies;
  const { username, email, firstName, lastName, phoneNumber } = req.body;

  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      await User.updateOne(
        { _id: userData._id },
        {
          username,
          email,
          firstName,
          lastName,
          phoneNumber,
        }
      );
      res.json({ status: "ok" });
    });
  } else {
    res.json(null);
  }
});

// Address
app.put("/api/address", (req, res) => {
  const { token } = req.cookies;
  const { address } = req.body;

  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      await User.updateOne({ _id: userData._id }, { address });
      res.json({ status: "ok" });
    });
  } else {
    res.json(null);
  }
});

// Update cart
app.put("/api/cart", async (req, res) => {
  const cart = req.body;
  const { token } = req.cookies;

  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      await User.updateOne({ _id: userData._id }, { cart });
      res.json({ status: "ok" });
    });
  } else {
    res.json(null);
  }
});

// Mongoose setup
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}...`);
    });
  })
  .catch((err) => {
    console.log(`${err} did not connect`);
  });
