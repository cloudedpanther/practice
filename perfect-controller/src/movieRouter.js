import express from "express";
import { home, movieDetail, filterMovie } from "./movieController";
import routes from "./routes";

const movieRouter = express.Router();

movieRouter.get(routes.home, home);
movieRouter.get(routes.filter, filterMovie);
movieRouter.get(routes.detail(), movieDetail);

export default movieRouter;
