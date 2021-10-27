const API_URL = "https://www.omdbapi.com/";
const API_KEY = "b63da2a6";

const resultToJson = (result) => result.json();

export default function fetchMovies() {
  return fetch(`${API_URL}?apikey=${API_KEY}&s=titanic&t=movie`)
    .then(resultToJson)
    .then((data) => data.Search);
}
