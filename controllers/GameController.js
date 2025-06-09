import GameService from "../services/GameService.js";

class GameController {
  gameService = new GameService();

  getAllGames = async (req, res) => {
    try {
      const games = await this.gameService.getAllGames();
      res.status(200).send({
        success: true,
        message: games,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  getById = async (req, res) => {
    try {
      const { id } = req.params;
      const game = await this.gameService.getGameById(id);
      res.status(200).send({
        success: true,
        message: game,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  createGame = async (request, res) => {
    try {
      const { title, description, image } = request.body;
      const game = await this.gameService.createGame({
        title,
        description,
        image,
      });

      res.status(201).send({
        success: true,
        message: game,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
}

export default GameController;
