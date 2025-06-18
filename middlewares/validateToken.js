import JWTUtils from "../utils/token.js";

export const validateToken = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).send({
      success: false,
      message: "User not logged",
    });
  }

  const { data: loggedUser } = JWTUtils.verifyToken(token);
  req.headers.user = loggedUser;
  next();
};
