import AuthService from "../services/AuthService.js";

export default class AuthController {
  authService = new AuthService();

  login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const { user, token } = await this.authService.login(email, password);
      res.cookie("token", token);
      res.status(200).send({
        success: true,
        message: user,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  createAndLogin = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const { user, token } = await this.authService.createAndLogin({
        name,
        email,
        password,
      });
      res.cookie("token", token);
      res.status(200).send({
        success: true,
        message: user,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
}
