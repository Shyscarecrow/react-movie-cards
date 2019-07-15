const moviesData = require('./movies.json');
const randomRating = require('./randomRating');

module.exports = () => {
  const movies = loadMovies();
  return {
    movies,
    extras: loadExtras(movies),
  };
};

function loadMovies() {
  return moviesData;
}

function loadExtras(movies) {
  return movies
    .map(({ id }) => id)
    .map(movieId => ({
      movieId,
      rating: randomRating(),
    }));
}
