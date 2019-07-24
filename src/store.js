import { observable, action, decorate } from 'mobx';
import { fetchMoviesListWithExtras } from './services/movieService';

class Store {
  movies = [];
  loading = false;
  error = false;
  fetchMovies() {
    return fetchMoviesListWithExtras()
  }
  setMovies(movies) {
    this.movies = movies
  }
  setLoading(loading) {
    this.loading = loading
  }
  setError(error) {
    this.error = error
  }
};

decorate(Store, {
  movies: observable,
  loading: observable,
  error: observable,
  fetchMovies: action,
  setMovies: action,
  setLoading: action,
  setError: action
})

export const appStore = new Store();
