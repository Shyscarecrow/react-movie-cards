import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { MovieCard } from './MovieCard';
import { fetchMovies } from '../../store/actions';
import { LayoutType } from '../LayoutSwitch';

const MOVIE_CARD_COL_COUNT = {
  [LayoutType.DESKTOP]: 'col-md-4',
  [LayoutType.TABLET]: 'col-md-6',
  [LayoutType.MOBILE]: 'col-md-12',
};

export const MovieList = connect(
  state => ({
    movies: state.movies,
  }),
  { fetchMovies },
)(
  (props) => {
    const { movies, layout } = props;

    useEffect(() => {
      props.fetchMovies();
    }, []);

    return (
      <div className="card-deck">
        {
          movies.map((movie, index) => (
            <MovieCard
              key={movie.id}
              className={MOVIE_CARD_COL_COUNT[layout]}
              movie={movie}
              layoutType={layout}
              reverse={(layout !== LayoutType.DESKTOP) && (index % 2 === 0)}
            />
          ))
        }
      </div>
    );
  },
);
