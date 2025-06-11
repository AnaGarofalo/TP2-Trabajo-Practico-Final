import UserService from "../services/UserService.js";

class UserController {
  userService = new UserService();

  getAllUser = async (req, res) => {
    try {
      const users = await this.userService.getAllUser();
      res.status(200).send({
        success: true,
        message: users,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await this.userService.getUserById(id);
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

  createUser = async (request, res) => {
    try {
      const { name, email, password } = request.body;
      const user = await this.userService.createUser({
        name,
        email,
        password,
      });

      res.status(201).send({
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

  updateUser = async (request, res) => {
    try {
      const { id } = request.params;
      const { name, email, password } = request.body;
      const user = await this.userService.updateUser({
        name,
        email,
        password,
        id,
      });

      res.status(201).send({
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

  deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await this.userService.deleteUser(id);
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

export default UserController;
