import { col, fn } from "sequelize";
import { Game, Genre, Review, User } from "../models/index.js";
import GameValidations from "../validations/GameValidations.js";
import ValidationUtils from "../validations/ValidationUtils.js";

class GameService {
  getAllGames = async () => {
    return await Game.findAll({
      attributes: [
        "id",
        "title",
        "description",
        "image",
        [fn("AVG", col("Reviews.score")), "averageScore"], // average score by game
      ],
      include: [
        {
          model: Review,
          attributes: [], // omit review props
        },
        {
          model: Genre,
          attributes: ["id", "title"],
          through: { attributes: [] }, // Hides intermediate table
        },
      ],
      group: ["Game.id", "Genres.id"], // used to calculate average
    });
  };

  getGameById = async (id, includeReviews = false) => {
    ValidationUtils.validateId(id);
    const game = await Game.findByPk(id, {
      include: includeReviews
        ? [
            {
              model: Review,
              attributes: ["score", "comment"],
              include: [
                {
                  model: User,
                  attributes: ["name", "profilePicture"],
                },
              ],
            },
            {
              model: Genre,
              attributes: ["id", "title"],
              through: { attributes: [] }, // Hides intermediate table
            },
          ]
        : [
            {
              model: Genre,
              attributes: ["id", "title"],
              through: { attributes: [] }, // Hides intermediate table
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

    const created = await Game.create(game);
    await created.setGenres(game.genresIds);

    return await this.getGameById(created.id);
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

    const updated = updatedGames[0];
    await updated.setGenres(game.genresIds);

    return await this.getGameById(updated.id);
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
