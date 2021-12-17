const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  //capital S as class.
  title: {
    type: String, //must be string
    unique: true, //cna't have two of same
    required: true, //must store movie, not undefined.
  },
  actor: {
    type: String, // only string, can not have it and also doens'tneed to be unqiue.
  },
});

//now we need to sore as a model with Class name ocnection
const Movie = mongoose.model("Movie", movieSchema); // VS code shwos what you need but good to store same as variable.
// assinged movieschema under that movie string udner that const.

module.exports = Movie;
// we cna use mongoose methods on this model. e.g. array.length returns number of arary.
//if we use Movie. - lots of methods will come up from mongo.db
