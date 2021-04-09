import express from "express";
import { home } from "./globalController";
import { uploadText } from "./middlewares";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.post("/", uploadText, home);

export default globalRouter;
