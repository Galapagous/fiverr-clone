const Jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  console.log("token started");
  const token = req.cookies.accesstoken;
  if (!token) {
    return res.status(401).json("You are not authenticated!");
  }
  Jwt.verify(token, process.env.JWT_KEY, (error, payload) => {
    if (error) {
      return res.status(403).json("Token is not valid");
    }
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    next(); // Call next() only after successful verification
  });
};

module.exports = verifyToken;
