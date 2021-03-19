import express from "express";
import routes from "../routes";
import { courses, coursesNew, coursesMine } from "../controllers";

const coursesRouter = express.Router();

coursesRouter.get(routes.home, courses);
coursesRouter.get(routes.coursesNew, coursesNew);
coursesRouter.get(routes.coursesMine, coursesMine);

export default coursesRouter;
