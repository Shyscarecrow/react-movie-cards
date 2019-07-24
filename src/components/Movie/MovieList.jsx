import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { MovieCard } from './MovieCard';
import { LayoutType } from '../LayoutSwitch';

const MOVIE_CARD_COL_COUNT = {
  [LayoutType.DESKTOP]: 'col-md-4',
  [LayoutType.TABLET]: 'col-md-6',
  [LayoutType.MOBILE]: 'col-md-12',
};

const MovieList = ({ layout, state }) => {
  useEffect(() => {
    async function fetchData() {
      const response = await state.fetchMovies();
      state.setMovies(response);
    }
    fetchData();
  }, []);

  return (
    <div className="card-deck">
      {
        state.movies.map((movie, index) => (
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
};

export default observer(MovieList);
