// import jwt from "jsonwebtoken";
const jwt = require("jsonwebtoken");

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, // prevent XSS attacks
    sameSite: "strict", //CSRF cross-site request forgery protection
    secure: process.env.NODE_ENV !== "development",
  });
};
module.exports = generateTokenAndSetCookie;
// export default generateTokenAndSetCookie;