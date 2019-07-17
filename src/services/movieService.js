const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000';

export async function fetchMoviesListWithExtras() {
  const response = await fetch(`${API_BASE_URL}/movies?_embed=extras`);
  const movies = await response.json();
  return movies;
}
