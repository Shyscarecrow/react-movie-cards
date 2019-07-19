import { createAction } from 'redux-actions';

export const fetchMovies = createAction('FETCHED_MOVIES');
export const requestMovies = createAction('REQUESTED_MOVIES');
export const requestMoviesSucceeded = createAction('REQUESTED_MOVIES_SUCCEEDED');
export const requestMoviesFailed = createAction('REQUESTED_MOVIES_FAILED');
