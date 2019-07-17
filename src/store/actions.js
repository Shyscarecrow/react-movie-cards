import { createAction } from 'redux-actions';
import { fetchMoviesListWithExtras } from '../services/movieService';

export const fetchMovies = createAction('FETCH_MOVIES', fetchMoviesListWithExtras);
