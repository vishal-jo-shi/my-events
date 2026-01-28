import User from "../models/User.model.js";

export const getProfile = async (req, res) => {
    const user = await User.findById(req.user.id).select("-password");

    res.json({ success:true,user });
};
