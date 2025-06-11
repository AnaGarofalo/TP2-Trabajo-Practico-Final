import { Genre } from "../models/index.js";
import GenreValidations from "../validations/GenreValidations.js";
import ValidationUtils from "../validations/ValidationUtils.js";

class GenreService {
  getAllGenres = async () => {
    return await Genre.findAll({
      attributes: ["id", "title"],
    });
  };

  getGenreById = async (id) => {
    ValidationUtils.validateId(id);
    const genre = await Genre.findByPk(id);
    if (!genre) {
      throw Error("Genre not found");
    }
    return genre;
  };

  createGenre = async (genre) => {
    GenreValidations.validateForCreation(genre);
    await this.validateTitleDoesntExists(genre.title);

    return await Genre.create(genre);
  };

  updateGenre = async (genre) => {
    GenreValidations.validateForCreation(genre);
    const oldGenre = await this.getGenreById(genre.id);

    // if the title changes, we need to make sure it's not taken
    if (oldGenre.title !== genre.title) {
      await this.validateTitleDoesntExists(genre.title);
    }

    const [updatedQuantity, updatedGenres] = await Genre.update(genre, {
      where: {
        id: genre.id,
      },
      returning: true,
    });

    return updatedGenres[0];
  };

  deleteGenre = async (id) => {
    ValidationUtils.validateId(id);
    const genre = await this.getGenreById(id);
    await Genre.destroy({
      where: {
        id,
      },
    });
    return genre;
  };

  validateTitleDoesntExists = async (title) => {
    const existentGenre = await this.getByTitle(title);
    if (existentGenre) {
      throw Error("Title already in use");
    }
  };

  getByTitle = async (title) => {
    return await Genre.findOne({
      where: {
        title,
      },
    });
  };
}

export default GenreService;
