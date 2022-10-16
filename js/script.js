"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("How much movies did you watched?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How much movies did you watched?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Watched few movies");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("You are classic viewer");
  } else if (personalMovieDB.count >= 30) {
    console.log("You are good viewer");
  } else {
    console.log("been Error!!!");
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.dir(personalMovieDB);
  }
}

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Input your favorite genre under name ${i}`);
  }
}

writeYourGenres();
showMyDB(personalMovieDB.privat);