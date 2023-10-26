import User from "../models/User.js";

const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const getSingleUser = async (req, res) => {
  const email = req.params.email;
  const user = await User.findOne({ email });
  res.json(user);
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  await User.deleteOne({ _id: id });
  res.json({ status: "ok" });
};

export { getUsers, deleteUser, getSingleUser };
