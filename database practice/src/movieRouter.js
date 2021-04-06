import express from "express";
import {
  home,
  movieDetail,
  editMovie,
  createMovie,
  deleteMovie,
  searchMovies
} from "./movieController";

const movieRouter = express.Router();

// Add your magic here!
movieRouter.get("/", home);
movieRouter.get("/create", createMovie);
movieRouter.post("/create", createMovie);
movieRouter.get("/search", searchMovies);
movieRouter.get("/:id", movieDetail);
movieRouter.get("/:id/edit", editMovie);
movieRouter.post("/:id/edit", editMovie);
movieRouter.get("/:id/delete", deleteMovie);

export default movieRouter;
