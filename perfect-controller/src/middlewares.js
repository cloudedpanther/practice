import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Nomad Movies";
  res.locals.routes = routes;
  next();
};
