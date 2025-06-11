import { col, fn } from "sequelize";
import { Game, Review } from "../models/index.js";
import GameValidations from "../validations/GameValidations.js";
import ValidationUtils from "../validations/ValidationUtils.js";

class GameService {
  getAllGames = async () => {
    return await Game.findAll({
      attributes: [
        "id",
        "title",
        [fn("AVG", col("Reviews.score")), "averageScore"], // average score by game
      ],
      include: [
        {
          model: Review,
          attributes: [], // omit review props
        },
      ],
      group: ["Game.id"], // used to calculate average
    });
  };

  getGameById = async (id) => {
    ValidationUtils.validateId(id);
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
    await this.validateTitleDoesntExists(game.title);

    return await Game.create(game);
  };

  updateGame = async (game) => {
    GameValidations.validateForUpdate(game);
    const oldGame = await this.getGameById(game.id);

    // if the title changes, we need to make sure it's not taken
    if (oldGame.title !== game.title) {
      await this.validateTitleDoesntExists(game.title);
    }

    const [updatedQuantity, updatedGames] = await Game.update(game, {
      where: {
        id: game.id,
      },
      returning: true,
    });

    return updatedGames[0];
  };

  deleteGame = async (id) => {
    ValidationUtils.validateId(id);
    const game = await this.getGameById(id);
    await Game.destroy({
      where: {
        id,
      },
    });
    return game;
  };

  validateTitleDoesntExists = async (title) => {
    const existentGame = await this.getByTitle(title);
    if (existentGame) {
      throw Error("Title already in use");
    }
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
