const numberOfFilms = +prompt("How much movies did you watched?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Input one of last watched movies", ""),
    b = +prompt("Input rating of movie", "");
  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("Done");
  } else {
    console.log("Error");
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log("Watched few movies");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("You are classic viewer");
} else if (personalMovieDB.count >= 30) {
  console.log("You are good viewer");
} else {
  console.log("been Error!!!")
}

console.dir(personalMovieDB);
