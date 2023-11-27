// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorsArray = moviesArray.map((movie) => movie.director);
  return directorsArray;
}

// Iteration 2: c. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (!moviesArray || moviesArray.length === 0) {
    return 0;
  }
  const spielbergMovies = moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray || moviesArray.length === 0) {
    return 0;
  }
  const totalScores = moviesArray.reduce(
    (sum, movie) => sum + (movie.score || 0),
    0
  );
  const avgScore = totalScores / moviesArray.length;
  const roundedAverage = parseFloat(avgScore.toFixed(2));
  return roundedAverage;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (!moviesArray || moviesArray.length === 0) {
    return 0;
  }
  const OnlydramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );

  if (OnlydramaMovies.length === 0) {
    return 0;
  }

  const TotalDramaScore = OnlydramaMovies.reduce(
    (sum, movie) => sum + (movie.score || 0),
    0
  );
  const averageScore = TotalDramaScore / OnlydramaMovies.length;
  const roundedScore = parseFloat(averageScore.toFixed(2));
  return roundedScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedMovies = moviesArray.slice().sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  if (!moviesArray || moviesArray.length === 0) {
    return [];
  }
  const sortedMoviess = moviesArray
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title));

  const first20Titles = sortedMoviess.slice(0, 20).map((movie) => movie.title);
  return first20Titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
