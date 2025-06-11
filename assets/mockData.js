import GameService from "../services/GameService.js";
import GenreService from "../services/GenreService.js";
import ReviewService from "../services/ReviewService.js";
import UserService from "../services/UserService.js";

const userService = new UserService();
const gameService = new GameService();
const reviewService = new ReviewService();
const genreService = new GenreService();

export default async function mockAllData() {
  const currentGames = await gameService.getAllGames();
  if (currentGames.length < 5) {
    await mockUsers();
    await mockGenres();
    await mockGames();
    await mockReviews();
  }
}

function mockUsers() {
  const usersToCreate = [
    {
      name: "LuquitasCapo",
      email: "luqui@elCapo.com",
      password: "password",
    },
    {
      name: "Lean",
      email: "lean@soyyo.com",
      password: "password",
    },
    {
      name: "Tomi",
      email: "tomi@gentleman.com",
      password: "password",
    },
    {
      name: "Anita",
      email: "ani@labuela.com",
      password: "password",
    },
    {
      name: "Ilan",
      email: "ilam@misterio.com",
      password: "password",
    },
  ];
  const promises = usersToCreate.map((user) => userService.createUser(user));
  return Promise.all(promises);
}

function mockGenres() {
  const genresToCreate = [
    { title: "Action" },
    { title: "Adventure" },
    { title: "RPG" },
    { title: "Shooter" },
    { title: "Strategy" },
    { title: "Horror" },
    { title: "Puzzle" },
    { title: "Simulation" },
    { title: "Sports" },
    { title: "Racing" },
    { title: "Platformer" },
    { title: "Fighting" },
    { title: "Stealth" },
    { title: "Survival" },
    { title: "Roguelike" },
    { title: "Sci-Fi" },
    { title: "Fantasy" },
    { title: "Historical" },
    { title: "Narrative" },
  ];

  const promises = genresToCreate.map((genre) =>
    genreService.createGenre(genre)
  );
  return Promise.all(promises);
}

function mockGames() {
  const gamesToCreate = [
    {
      title: "DOOM: The Dark Ages",
      description:
        "A prequel to the DOOM series, this game delves into the Doom Slayer's origins, blending medieval settings with intense demon-slaying action.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Doom_The_Dark_Ages_cover_art.jpg/800px-Doom_The_Dark_Ages_cover_art.jpg",
      genresIds: [1, 4, 14, 17],
    },
    {
      title: "Hades II",
      description:
        "The sequel to the acclaimed roguelike, players control Melinoë, battling through the underworld to confront Chronos, the Titan of Time.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Hades_II_cover_art.jpg/800px-Hades_II_cover_art.jpg",
      genresIds: [1, 3, 15, 17],
    },
    {
      title: "Monster Hunter Wilds",
      description:
        "An open-world installment in the Monster Hunter series, featuring seamless exploration and dynamic combat against formidable creatures.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Monster_Hunter_Wilds_cover_art.jpg/800px-Monster_Hunter_Wilds_cover_art.jpg",
      genresIds: [1, 3, 2, 14],
    },
    {
      title: "Avowed",
      description:
        "A first-person RPG set in the Pillars of Eternity universe, offering deep storytelling and expansive environments.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Avowed_cover_art.jpg/800px-Avowed_cover_art.jpg",
      genresIds: [2, 3, 17],
    },
    {
      title: "Civilization VII",
      description:
        "The latest entry in the Civilization series, introducing new mechanics and civilizations for a deeper strategic experience.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Civilization_VII_cover_art.jpg/800px-Civilization_VII_cover_art.jpg",
      genresIds: [5, 18],
    },
    {
      title: "Kingdom Come: Deliverance II",
      description:
        "A sequel to the medieval RPG, continuing the story with enhanced realism and historical accuracy.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Kingdom_Come_Deliverance_II_cover_art.jpg/800px-Kingdom_Come_Deliverance_II_cover_art.jpg",
      genresIds: [3, 18, 2],
    },
    {
      title: "Final Fantasy VII Rebirth",
      description:
        "The continuation of the Final Fantasy VII remake, expanding the narrative with new characters and gameplay elements.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Final_Fantasy_VII_Rebirth_cover_art.jpg/800px-Final_Fantasy_VII_Rebirth_cover_art.jpg",
      genresIds: [3, 2, 17],
    },
    {
      title: "Slay the Spire 2",
      description:
        "The follow-up to the popular deck-building roguelike, introducing new characters and strategies.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Slay_the_Spire_2_cover_art.jpg/800px-Slay_the_Spire_2_cover_art.jpg",
      genresIds: [5, 7, 15],
    },
    {
      title: "Resident Evil: Requiem",
      description:
        "A new chapter in the Resident Evil series, featuring a fresh storyline and enhanced horror elements.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Resident_Evil_Requiem_cover_art.jpg/800px-Resident_Evil_Requiem_cover_art.jpg",
      genresIds: [1, 6, 14],
    },
    {
      title: "Death Stranding 2: On the Beach",
      description:
        "The sequel to the acclaimed game, continuing the story with new characters and expanded gameplay mechanics.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Death_Strand_2_cover_art.jpg/800px-Death_Strand_2_cover_art.jpg",
      genresIds: [2, 16, 6],
    },
    {
      title: "The Expanse: Osiris Reborn",
      description:
        "An action RPG set in The Expanse universe, offering space exploration and combat.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Expanse_Osiris_Reborn_cover_art.jpg/800px-Expanse_Osiris_Reborn_cover_art.jpg",
      genresIds: [1, 3, 16],
    },
    {
      title: "Echoes of the End",
      description:
        "A narrative-driven adventure game with a focus on exploration and puzzle-solving.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Echoes_of_the_End_cover_art.jpg/800px-Echoes_of_the_End_cover_art.jpg",
      genresIds: [2, 7, 19],
    },
    {
      title: "Sleep Awake",
      description:
        "A psychological thriller combining FMV and 3D gameplay, exploring the boundaries of reality and dreams.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Sleep_Awake_cover_art.jpg/800px-Sleep_Awake_cover_art.jpg",
      genresIds: [6, 2, 19],
    },
    {
      title: "Titan Quest 2",
      description:
        "The sequel to the action RPG, featuring new mythologies and enhanced combat systems.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Titan_Quest_2_cover_art.jpg/800px-Titan_Quest_2_cover_art.jpg",
      genresIds: [1, 3, 17],
    },
    {
      title: "Call of Duty: Black Ops 7",
      description:
        "The latest installment in the Call of Duty franchise, introducing a co-op campaign and traditional Zombies mode.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Call_of_Duty_Black_Ops_7_cover_art.jpg/800px-Call_of_Duty_Black_Ops_7_cover_art.jpg",
      genresIds: [1, 4, 6],
    },
    {
      title: "Grounded 2",
      description:
        "The sequel to the survival game, offering new environments and challenges.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Grounded_2_cover_art.jpg/800px-Grounded_2_cover_art.jpg",
      genresIds: [2, 14, 8],
    },
    {
      title: "Keeper",
      description:
        "A new title from Double Fine Productions, featuring unique gameplay mechanics and storytelling.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Keeper_cover_art.jpg/800px-Keeper_cover_art.jpg",
      genresIds: [],
    },
    {
      title: "Stranger Than Heaven",
      description:
        "A noir thriller set in both World War I and II-era Japan, blending detective work with action elements.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Stranger_Than_Heaven_cover_art.jpg/800px-Stranger_Than_Heaven_cover_art.jpg",
      genresIds: [2, 6, 18],
    },
  ];

  const promises = gamesToCreate.map((game) => gameService.createGame(game));
  return Promise.all(promises);
}

function mockReviews() {
  const reviews = [
    {
      score: 5,
      comment: "Absolutely thrilling and brutal. Doom is back at its best!",
      GameId: 1,
      UserId: 2,
    },
    {
      score: 4,
      comment:
        "Hades II builds beautifully on the first game. Addictive combat!",
      GameId: 2,
      UserId: 1,
    },
    {
      score: 4.5,
      comment:
        "The open-world hunting feels seamless and natural. A massive step forward.",
      GameId: 3,
      UserId: 3,
    },
    {
      score: 3.5,
      comment: "Avowed has great lore but lacks polish in some gameplay areas.",
      GameId: 4,
      UserId: 5,
    },
    {
      score: 4.8,
      comment:
        "Civilization VII is peak strategy. Deep, complex, and incredibly replayable.",
      GameId: 5,
      UserId: 1,
    },
    {
      score: 4,
      comment:
        "Historically rich and visually stunning. Kingdom Come II improves everything.",
      GameId: 6,
      UserId: 4,
    },
    {
      score: 3.7,
      comment:
        "Great visuals and combat, though the pacing drags a bit in FFVII Rebirth.",
      GameId: 7,
      UserId: 2,
    },
    {
      score: 4.2,
      comment:
        "More cards, more chaos. Slay the Spire 2 is a deckbuilder's dream.",
      GameId: 8,
      UserId: 3,
    },
    {
      score: 2.8,
      comment: "Not scary enough. The story is fine but it lacks innovation.",
      GameId: 9,
      UserId: 5,
    },
    {
      score: 4.6,
      comment: "A bizarre but gripping experience. Kojima does it again.",
      GameId: 10,
      UserId: 1,
    },
    {
      score: 3.3,
      comment: "Decent space RPG but lacks the depth of other Expanse media.",
      GameId: 11,
      UserId: 2,
    },
    {
      score: 4,
      comment:
        "Beautifully written and visually impressive. Great for story lovers.",
      GameId: 12,
      UserId: 4,
    },
    {
      score: 3.9,
      comment: "Clever use of dream mechanics and good atmosphere.",
      GameId: 13,
      UserId: 3,
    },
    {
      score: 4.4,
      comment: "A solid sequel with tight combat and deep lore.",
      GameId: 14,
      UserId: 5,
    },
    {
      score: 3.6,
      comment: "Enjoyable shooter, but doesn’t break new ground.",
      GameId: 15,
      UserId: 2,
    },
    {
      score: 4.1,
      comment:
        "Grounded 2 is charming, tough, and fun to explore with friends.",
      GameId: 16,
      UserId: 1,
    },
    {
      score: 3.2,
      comment: "Cool idea but the gameplay loop gets repetitive fast.",
      GameId: 17,
      UserId: 5,
    },
    {
      score: 4.5,
      comment: "Stylish, strange, and emotionally deep. Loved every minute.",
      GameId: 18,
      UserId: 4,
    },
    {
      score: 4.2,
      comment: "Doom: The Dark Ages is metal as hell—literally.",
      GameId: 1,
      UserId: 3,
    },
    {
      score: 3.9,
      comment: "Hades II is great, but I miss Zagreus a bit.",
      GameId: 2,
      UserId: 4,
    },
    {
      score: 5,
      comment: "Best Monster Hunter yet. Can’t stop playing.",
      GameId: 3,
      UserId: 2,
    },
    {
      score: 4.1,
      comment: "The worldbuilding in Avowed is top tier.",
      GameId: 4,
      UserId: 5,
    },
    {
      score: 3.8,
      comment:
        "Civilization VII has a steep learning curve, but it's worth it.",
      GameId: 5,
      UserId: 1,
    },
    {
      score: 4.3,
      comment: "Amazing visuals and period detail. KC:D2 is impressive.",
      GameId: 6,
      UserId: 2,
    },
    {
      score: 3.5,
      comment:
        "Final Fantasy VII Rebirth is ambitious, maybe too much at times.",
      GameId: 7,
      UserId: 3,
    },
    {
      score: 4.6,
      comment: "Slay the Spire 2 is dangerously addictive.",
      GameId: 8,
      UserId: 5,
    },
    {
      score: 2.5,
      comment: "Resident Evil: Requiem felt like a step backward.",
      GameId: 9,
      UserId: 1,
    },
    {
      score: 4.9,
      comment: "Death Stranding 2 blew my mind. So cinematic.",
      GameId: 10,
      UserId: 4,
    },
    {
      score: 3.2,
      comment: "The Expanse RPG has potential but needs more polish.",
      GameId: 11,
      UserId: 2,
    },
    {
      score: 4.4,
      comment: "Echoes of the End is a visual treat with a unique story.",
      GameId: 12,
      UserId: 5,
    },
    {
      score: 3.6,
      comment: "Sleep Awake is weird but strangely compelling.",
      GameId: 13,
      UserId: 3,
    },
    {
      score: 4.3,
      comment: "Titan Quest 2 nails the mythological vibe.",
      GameId: 14,
      UserId: 1,
    },
    {
      score: 3.7,
      comment: "Black Ops 7 is solid, but starting to feel formulaic.",
      GameId: 15,
      UserId: 4,
    },
    {
      score: 4.0,
      comment: "Loved the new crafting options in Grounded 2.",
      GameId: 16,
      UserId: 2,
    },
    {
      score: 3.0,
      comment: "Keeper’s concept is cool, but execution is clunky.",
      GameId: 17,
      UserId: 5,
    },
    {
      score: 4.6,
      comment: "Stranger Than Heaven is haunting and unforgettable.",
      GameId: 18,
      UserId: 3,
    },
    {
      score: 4.5,
      comment: "Ripping through demons never gets old. Fantastic game.",
      GameId: 1,
      UserId: 4,
    },
    {
      score: 4.0,
      comment: "Melinoë is a great protagonist. Hades II rocks.",
      GameId: 2,
      UserId: 1,
    },
    {
      score: 3.9,
      comment: "Monster Hunter Wilds is a sandbox dream come true.",
      GameId: 3,
      UserId: 5,
    },
    {
      score: 3.4,
      comment: "Interesting spells and combat in Avowed.",
      GameId: 4,
      UserId: 2,
    },
    {
      score: 4.9,
      comment: "The best Civ game since IV. Absolute masterpiece.",
      GameId: 5,
      UserId: 3,
    },
    {
      score: 2.7,
      comment: "Kingdom Come 2 has bugs that ruin immersion.",
      GameId: 6,
      UserId: 1,
    },
    {
      score: 3.3,
      comment: "Some sections in Rebirth felt padded.",
      GameId: 7,
      UserId: 4,
    },
    {
      score: 4.2,
      comment: "Deck-building has never felt so rewarding.",
      GameId: 8,
      UserId: 2,
    },
    { score: 3.1, comment: "Not bad, just forgettable.", GameId: 9, UserId: 5 },
    {
      score: 4.8,
      comment: "Gorgeous direction, chilling themes. Loved it.",
      GameId: 10,
      UserId: 3,
    },
    {
      score: 2.9,
      comment: "Expected more from the Expanse brand.",
      GameId: 11,
      UserId: 4,
    },
    {
      score: 4.7,
      comment: "Narrative-driven games are back, thanks to this gem.",
      GameId: 12,
      UserId: 1,
    },
    {
      score: 3.5,
      comment: "Feels like a Lynch film in video game form.",
      GameId: 13,
      UserId: 2,
    },
    {
      score: 4.0,
      comment: "Classic action RPG goodness.",
      GameId: 14,
      UserId: 3,
    },
    {
      score: 3.2,
      comment: "Zombies are fun, but the campaign is underwhelming.",
      GameId: 15,
      UserId: 5,
    },
    {
      score: 4.4,
      comment: "Multiplayer has really improved!",
      GameId: 16,
      UserId: 4,
    },
    {
      score: 3.0,
      comment: "Nice concept, but clumsy mechanics.",
      GameId: 17,
      UserId: 1,
    },
    {
      score: 4.5,
      comment: "Incredible writing and music. Truly unique.",
      GameId: 18,
      UserId: 2,
    },
    {
      score: 4.3,
      comment: "Doom Slayer with a mace? Yes please.",
      GameId: 1,
      UserId: 5,
    },
    {
      score: 4.0,
      comment: "Still early access, but promising as hell.",
      GameId: 2,
      UserId: 3,
    },
    {
      score: 3.6,
      comment: "Fighting giant beasts never gets old.",
      GameId: 3,
      UserId: 4,
    },
    {
      score: 3.9,
      comment: "Lots of potential in Avowed’s mechanics.",
      GameId: 4,
      UserId: 1,
    },
    {
      score: 4.6,
      comment: "Deep, fun, and endlessly complex.",
      GameId: 5,
      UserId: 2,
    },
    {
      score: 3.4,
      comment: "A bit clunky, but still enjoyable.",
      GameId: 6,
      UserId: 5,
    },
  ];
  const promises = reviews.map((r) => reviewService.createReview(r));
  return Promise.all(promises);
}
