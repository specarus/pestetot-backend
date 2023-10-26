import User from "../models/User.js";

const deleteLoggedInUser = async (req, res) => {
  const { id } = req.params;

  if (id) {
    await User.deleteOne({ _id: id });
  }
};

export { deleteLoggedInUser };
