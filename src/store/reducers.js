import { handleActions } from 'redux-actions';
import { fetchMovies } from './actions';

const initialState = {
  movies: [],
};

export default handleActions(
  {
    [fetchMovies]: (state, { payload: movies }) => ({ ...state, movies }),
  },
  initialState,
);
