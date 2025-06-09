import { col, fn } from "sequelize";
import { Game, Review } from "../models/index.js";
import GameValidations from "../validations/GameValidations.js";

class GameService {
  getAllGames = async () => {
    return await Game.findAll({
      attributes: [
        "id",
        "title",
        [fn("AVG", col("Reviews.score")), "averageScore"], // calculamos el promedio de score de cada juego
      ],
      include: [
        {
          model: Review,
          attributes: [], // no traemos los reviews individuales
        },
      ],
      group: ["Game.id"], // agrupamos los review por gameId
    });
  };

  getGameById = async (id) => {
    const game = await Game.findByPk(id, {
      include: [
        {
          model: Review,
          attributes: ["score", "comment"],
        },
      ],
    });
    if (!game) {
      throw Error("Game not found");
    }
    return game;
  };

  createGame = async (game) => {
    GameValidations.validateForCreation(game);

    const existentGame = await this.getByTitle(game.title);
    if (existentGame) {
      throw Error("Title already in use");
    }

    return await Game.create(game);
  };

  getByTitle = async (title) => {
    return await Game.findOne({
      where: {
        title,
      },
    });
  };
}

export default GameService;
