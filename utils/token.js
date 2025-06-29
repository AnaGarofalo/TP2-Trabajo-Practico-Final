import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

export default class JWTUtils {
  static gentoken = (user) => {
    return jwt.sign({ data: user }, JWT_SECRET, { expiresIn: "24h" });
  };

  static verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
  };
}
