/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";

// Home
export const home = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.render("home", { pageTitle: "Home", movies });
  } catch (error) {
    res.render("home", { pageTitle: "Home", movies: [] });
  }
};

// Create
export const createMovie = async (req, res) => {
  if (req.method === "GET") {
    return res.render("createMovie", { pageTitle: "Create" });
  } else if (req.method === "POST") {
    try {
      const {
        body: { title, year, rating, synopsis, genres }
      } = req;
      const newMovie = await Movie.create({
        title,
        year,
        rating,
        synopsis,
        genres: genres.split(",")
      });
      return res.redirect(`/${newMovie.id}`);
    } catch (error) {
      return res.redirect("/");
    }
  }
};

// Detail
export const movieDetail = async (req, res) => {
  try {
    const {
      params: { id }
    } = req;
    const movie = await Movie.findById(id);
    res.render("movieDetail", { pageTitle: movie.title, movie });
  } catch (error) {
    res.render("404");
  }
};

// Edit
export const editMovie = async (req, res) => {
  const {
    params: { id }
  } = req;
  if (req.method === "GET") {
    try {
      const movie = await Movie.findById(id);
      return res.render("editMovie", {
        pageTitle: `Editing ${movie.title}`,
        movie
      });
    } catch (error) {
      res.render("404");
    }
  } else if (req.method === "POST") {
    try {
      const {
        body: { title, year, rating, synopsis, genres }
      } = req;
      await Movie.findOneAndUpdate(
        { _id: id },
        { title, year, rating, synopsis, genres: genres.split(",") }
      );
      return res.redirect(`/${id}`);
    } catch (error) {
      res.redirect("/");
    }
  }
};

// Delete
export const deleteMovie = async (req, res) => {
  try {
    const {
      params: { id }
    } = req;
    await Movie.findOneAndRemove({ _id: id });
    res.redirect("/");
  } catch (error) {
    res.render("404");
  }
};

// Search
export const searchMovies = async (req, res) => {
  try {
    const {
      query: { year, rating }
    } = req;
    if (year) {
      const movies = await Movie.find({ year: { $gte: year } }).sort({
        year: -1
      });
      res.render("searchMovies", {
        pageTitle: `Filtering by year: ${year}`,
        movies
      });
    } else if (rating) {
      const movies = await Movie.find({ rating: { $gte: rating } }).sort({
        rating: -1
      });
      res.render("searchMovies", {
        pageTitle: `Filtering by rating: ${rating}`,
        movies
      });
    } else {
      res.redirect("/");
    }
  } catch (error) {
    res.render("404");
  }
};
