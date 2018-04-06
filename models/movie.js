var mongoose = require('mongoose');

//movie Schema
var movieSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    info:{
        type: String
    },
    director:{
        type: String,
        required: true
    },
    runtime:{
        type: String
    },
    create_date:{
        type: Date,
        default: Date.now
    }
})

var movie = module.exports = mongoose.model('movie', movieSchema);

//get movies
module.exports.getMovies = function(callback, limit){
    Movie.find(callback).limit(limit);
}

//get movie (by id)
module.exports.getMovieById = function(id, callback,){
    Movie.findById(id, callback);
}

//add movie
module.exports.addMovie = function (movie, callback){
    Movie.create(movie, callback);
}

//update movie
module.exports.updateMovie = function (id, movie, options, callback){
    var query = {_id: id};
    var update = {
        title: movie.title,
        genre: movie.genre,
        info: movie.info,
        director: movie.director,
        runtime: movie.runtime,
    }
    Movie.findOneAndUpdate(query, update, options, callback);
}

// delete movie
module.exports.removeMovie = function (id, callback){
    var query = {_id: id};
    Movie.remove(query, callback);
}