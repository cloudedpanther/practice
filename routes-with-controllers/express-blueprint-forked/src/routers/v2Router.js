import express from "express";
import routes from "../routes";
import { v2Remove, v2Edit } from "../controllers";

const v2Router = express.Router();

v2Router.get(routes.v2Remove, v2Remove);
v2Router.get(routes.v2Edit, v2Edit);

export default v2Router;
