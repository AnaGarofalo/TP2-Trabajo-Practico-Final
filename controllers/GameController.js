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
      const game = await this.gameService.getGameById(id, true);
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
      const { title, description, image, genresIds } = request.body;
      const game = await this.gameService.createGame({
        title,
        description,
        image,
        genresIds,
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

  updateGame = async (request, res) => {
    try {
      const { id } = request.params;
      const { title, description, image, genresIds } = request.body;
      const game = await this.gameService.updateGame({
        title,
        description,
        image,
        genresIds,
        id,
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

  deleteGame = async (req, res) => {
    try {
      const { id } = req.params;
      const game = await this.gameService.deleteGame(id);
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
}

export default GameController;
