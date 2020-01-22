import routes from "./routes";

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = 'Watube';
  res.locals.routes = routes;
  next();
};