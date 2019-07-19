import { call, put, takeEvery } from 'redux-saga/effects';
import { requestMovies, requestMoviesSucceeded, requestMoviesFailed } from './actions';
import { fetchMoviesListWithExtras } from '../services/movieService';


function* fetchMoviesAsync() {
  try {
    yield put(requestMovies());
    const movies = yield call(() => fetchMoviesListWithExtras());
    yield put(requestMoviesSucceeded(movies));
  } catch (error) {
    yield put(requestMoviesFailed());
  }
}

export function* watchFetchMovies() {
  yield takeEvery('FETCHED_MOVIES', fetchMoviesAsync);
}
