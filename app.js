const connection = require("./src/database/connection");
const yargs = require("yargs");


const {
  addMovie,
  findMovies,
  findActor,
  updateActor,
  deleteMovie,
} = require("./src/movie/movie.methods"); //because of how exported in conneciton

const {
  addTVShow,
  findTVShow,
  findRating,
  updateRating,
  deleteTVShow,
} = require("./src/tvshow/tvshow.methods");

const app = () => {
  let movieYargs = { title: yargs.argv.title, actor: yargs.argv.actor };
  let tvYargs = {
    title: yargs.argv.title,
    genre: yargs.argv.genre,
    rating: yargs.argv.rating,
  };
  //movie conditions
  if (process.argv[2] == "add movie") {
    addMovie(movieYargs);
  } else if (process.argv[2] == "find movies") {
    findMovies(movieYargs);
  } else if (process.argv[2] == "filter actor movies") {
    findActor(movieYargs);
  } else if (process.argv[2] == "update actor movies") {
    updateActor(movieYargs);
  } else if (process.argv[2] == "delete movie") {
    deleteMovie(movieYargs);

    //tv show conditions
  } else if (process.argv[2] == "add tvshow") {
    addTVShow(tvYargs);
  } else if (process.argv[2] == "find tvshow") {
    findTVShow(tvYargs);
  } else if (process.argv[2] == "filter rating tvshow") {
    findRating(tvYargs);
  } else if (process.argv[2] == "update rating tvshow") {
    updateRating(tvYargs);
  } else if (process.argv[2] == "delete tvshow") {
    deleteTVShow(tvYargs);
  } else {
    console.log("incorrect command");
  }
};

app();
connection();
