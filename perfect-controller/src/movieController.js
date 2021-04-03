import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";

export const home = (req, res) => {
  const movies = getMovies();
  res.render("movies", { pageTitle: "Movies!", movies });
};

export const movieDetail = (req, res) => {
  const {
    params: { id: movieId }
  } = req;
  const thisMovie = getMovieById(movieId);
  res.render("detail", {
    pageTitle: thisMovie.title,
    thisMovie
  });
};
export const filterMovie = (req, res) => {
  const {
    query: { year: filterYear, rating: filterRating }
  } = req;

  if (filterYear) {
    const movies = getMovieByMinimumYear(filterYear);
    res.render("movies", {
      pageTitle: `Searching by year: ${filterYear}`,
      movies
    });
  } else if (filterRating) {
    const movies = getMovieByMinimumRating(filterRating);
    res.render("movies", {
      pageTitle: `Searching by rating: ${filterRating}`,
      movies
    });
  } else {
    res.render("404");
  }
};
