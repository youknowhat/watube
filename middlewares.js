import multer from 'multer';
import routes from './routes';

const multerVideo = multer({ dest: 'uploads/videos/' });

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = 'Watube';
  res.locals.routes = routes;
  res.locals.user = req.user || null; // passport에서 제공하는 user 정보를 템플릿에서 접근하기 위함
  console.log(req.user);
  next();
};

export const uploadVideo = multerVideo.single('videoFile');
