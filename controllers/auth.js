import User from "../models/User.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const register = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  // Check if all the fields are completed
  if (!username || !email || !password || !confirmPassword) {
    return res.json({
      status: "error",
      error: "Nu ati completat toate campurile!",
    });
  }

  // Check if the email is already registered
  const oldUser = await User.findOne({ email });
  if (oldUser) {
    return res.json({
      status: "error",
      error: "Acest email este deja inregistrat!",
    });
  }

  // Check if the password satisfies the length minimum
  if (password.length < 6) {
    return res.json({
      status: "error",
      error: "Parola trebuie sa aiba cel puțin 6 caractere!",
    });
  }

  // Check if the passwords match
  if (password !== confirmPassword) {
    return res.json({
      status: "error",
      error: "Parolele nu corespund!",
    });
  }

  // Create the user
  const salt = await bcrypt.genSalt(10);
  await bcrypt
    .hash(password, salt)
    .then(async (hash) => {
      const newUser = await User.create({
        _id: new mongoose.Types.ObjectId(),
        username,
        email,
        password: hash,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });
      await newUser.save();
    })
    .then(() => res.json({ status: "ok" }))
    .catch((err) => {
      res.json({ status: "error", error: err });
    });
};

export { register };
