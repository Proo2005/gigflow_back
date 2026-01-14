import User from "../models/user.model.js";

export const getFreelancers = async (req, res) => {
  try {
    const freelancers = await User.find(
      { userType: "freelancer" },
      { password: 0 } // hide password
    );

    res.status(200).json(freelancers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
