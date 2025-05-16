import { verify } from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const decodedData = verify(token, process.env.JWT_SECRET);
    console.log("Decoded Data:", decodedData);
    req.userId = decodedData.id;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export default auth;
