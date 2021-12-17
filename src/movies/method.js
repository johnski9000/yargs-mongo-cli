const Movie = require("./model");
const mongoose = require("mongoose");

exports.addMovie = async (movieObj) => {
  // exports can be used here instead of end in place of const
  try {
    const movie = new Movie(movieObj); //creates it based on movie.model. Does it have title? does it have string?
    // needs to follow rules and if it does, it creates it.
    await movie.save();
    mongoose.disconnect();
    console.log("Movie successfully added to Movie DB");
  } catch (error) {
    console.log(error);
  }
};

exports.findMovies = async (movieObj) => {
  try {
    const list = await Movie.find({ movieObj });
    console.log("Found movies =>", list);
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

exports.findActor = async (movieObj) => {
  try {
    const actorList = await Movie.find({ actor: movieObj.actor });
    console.log("Found actor's films =>", actorList);
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

exports.updateActor = async (movieObj) => {
  try {
    await Movie.findOneAndUpdate(
      { title: movieObj.title },
      { actor: movieObj.actor }
    );
    console.log(`Actor updated for ${movieObj.title}`);
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMovie = async (movieObj) => {
  try {
    await Movie.deleteOne({ title: movieObj.title });
    console.log(`${movieObj.title} deleted from database.`);
    mongoose.disconnect();
  } catch (error) {}
};
