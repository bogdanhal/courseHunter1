"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("How much movies did you watched?", "");
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("How much movies did you watched?", "");
    }
  },
  rememberMyFilms: function() {
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
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log("Watched few movies");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("You are classic viewer");
    } else if (personalMovieDB.count >= 30) {
      console.log("You are good viewer");
    } else {
      console.log("been Error!!!");
    }
  },
  showMyDB: function(hidden) {
    if (!hidden) {
      console.dir(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function() {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Input your favorite genre under name ${i}`);
      if (genre === '' || genre === null) {
        console.log("Not correct data written or not write one");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Lovely genre by number ${i + 1}: ${item}`);
    });
  }
};


//personalMovieDB.writeYourGenres();