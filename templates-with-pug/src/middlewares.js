export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "Challenge - Day 8";
  next();
};
