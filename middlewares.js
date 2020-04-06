import routes from './routes';

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = 'Watube';
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 5
  };
  next();
};
