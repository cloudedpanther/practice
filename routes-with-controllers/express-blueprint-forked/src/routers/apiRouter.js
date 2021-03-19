import express from "express";
import routes from "../routes";
import { apiDocumentation } from "../controllers";
import v1Router from "./v1Router";
import v2Router from "./v2Router";

const apiRouter = express.Router();

apiRouter.get(routes.apiDocumentation, apiDocumentation);

apiRouter.use(routes.v1, v1Router);
apiRouter.use(routes.v2, v2Router);

export default apiRouter;
