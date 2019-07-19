import { handleActions } from 'redux-actions';
import { requestMovies, requestMoviesSucceeded, requestMoviesFailed } from './actions';

const initialState = {
  movies: [],
  loading: false,
  error: false,
};

export default handleActions(
  {
    [requestMovies]: state => ({ ...state, loading: true, error: false }),
    [requestMoviesSucceeded]: (state, { payload: movies }) => (
      { loading: false, error: false, movies }
    ),
    [requestMoviesFailed]: state => ({ ...state, loading: false, error: true }),
  },
  initialState,
);
