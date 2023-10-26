import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  _id: String,
  username: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  firstName: String,
  lastName: String,
  cart: [],
  address: {
    county: String,
    city: String,
    street: String,
    building: String,
    flat: String,
    stair: String,
    postalCode: String,
  },
  phoneNumber: String,
  createdAt: Date,
  updatedAt: Date,
});

const User = model("User", UserSchema);
export default User;
