import express from "express";
import routes from "../routes";
import { v1Buy, v1Refund } from "../controllers";

const v1Router = express.Router();

v1Router.get(routes.v1Buy, v1Buy);
v1Router.get(routes.v1Refund, v1Refund);

export default v1Router;
