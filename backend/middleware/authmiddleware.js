const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    console.log("in middleware"); 
  const token = req.header("token");
  console.log("in middleware");
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    req.role = decoded.role;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
