const numberOfFilms = +prompt("How much movies did you watched?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const
  a = prompt("Input one of last watched movies", ""),
  b = +prompt("Input rating of movie", ""),
  c = prompt("Input one of last watched movies", ""),
  d = +prompt("Input rating of movie", "");


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.dir(personalMovieDB);