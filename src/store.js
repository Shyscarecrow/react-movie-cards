import { observable, action, decorate } from 'mobx';
import { fetchMoviesListWithExtras } from './services/movieService';

class Store {
  movies = [];
  fetchMovies() {
    return fetchMoviesListWithExtras()
  }
   setMovies(movies) {
    this.movies = movies
  }
};

decorate(Store, {
  movies: observable,
  fetchMovies: action,
  setMovies: action
})

export const appStore = new Store();
