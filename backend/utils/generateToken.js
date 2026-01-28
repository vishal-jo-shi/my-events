import jwt from "jsonwebtoken";

export const generateToken = (res, user) => {
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,     //change this to "true" on production
    sameSite: "lax",   // change this to "strict" on production
    maxAge: 7 * 24 * 60 * 60 * 1000
  });
};
