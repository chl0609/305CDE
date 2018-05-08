var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Genre = require('./models/genre');
Movie = require('./models/movie');

//connect to mongoose
mongoose.connect('mongodb://localhost/moviestore');
var db = mongoose.createConnection;

app.get('/', function (req, res) {
    res.send('welcome to my moviestore,Please use /api/movies or api/genres');
});

app.get('/api/genres', function (req, res) {
    Genre.getGenres(function (err, genres) {
        if (err) {
            throw err;
        }
        res.json(genres);
    });
});

app.post('/api/genres', function (req, res) {
    var genre = req.body;
    Genre.addGenre(genre, function (err, genre) {
        if (err) {
            throw err;
        }
        res.json(genre);
    });
});

app.put('/api/genres/:_id', function (req, res) {
    var id = req.params._id;
    var genre = req.body;
    Genre.updateGenre(id, genre, {}, function (err, genre) {
        if (err) {
            throw err;
        }
        res.json(genre);
    });
});

app.delete('/api/genres/:_id', function (req, res) {
    var id = req.params._id;
    Genre.removeGenre(id, function (err, genre) {
        if (err) {
            throw err;
        }
        res.json(genre);
    });
});

app.get('/api/movies', function (req, res) {
    Movie.getMovies(function (err, movies) {
        if (err) {
            throw err;
        }
        res.json(movies);
    });
});

app.get('/api/movies/:_id', function (req, res) {
    Movie.getMovieById(req.params._id, function (err, movie) {
        if (err) {
            throw err;
        }
        res.json(movie);
    });
});

app.post('/api/movies', function (req, res) {
    var movie = req.body;
    Movie.addMovie(movie, function (err, movie) {
        if (err) {
            throw err;
        }
        res.json(movie);
    });
});

app.put('/api/movies/:_id', function (req, res) {
    var id = req.params._id;
    var movie = req.body;
    Movie.updateMovie(id, movie, {}, function (err, movie) {
        if (err) {
            throw err;
        }
        res.json(movie);
    });
});

app.delete('/api/movies/:_id', function (req, res) {
    var id = req.params._id;
    Movie.removeMovie(id, function (err, movie) {
        if (err) {
            throw err;
        }
        res.json(movie);
    });
});

app.listen(3000);
console.log('running on port 3000');