const moviesData = require('./movies.json');
const randomRating = require('./randomRating');
const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000';

module.exports = () => {
  const movies = loadMovies();
  return {
    movies,
    extras: loadExtras(movies),
  };
};

function loadMovies() {
  return moviesData.map(movie => ({...movie, imageUrl: `${API_BASE_URL}/${movie.imageUrl}`}))
}

function loadExtras(movies) {
  return movies
    .map(({ id }) => id)
    .map(movieId => ({
      movieId,
      rating: randomRating(),
    }));
}
