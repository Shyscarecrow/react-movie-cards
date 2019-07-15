const Rating = {
  GOLD: 'gold',
  SILVER: 'silver',
  NONE: 'none',
};

const RatingProbability = [
  [Rating.GOLD, 0.2],
  [Rating.SILVER, 0.5],
  [Rating.NONE, 1],
];

function randomRating() {
  const rnd = Math.random();
  const [rating] = RatingProbability.find(
    ([, prob]) => (rnd <= prob),
  );
  return rating;
}

module.exports = randomRating;
