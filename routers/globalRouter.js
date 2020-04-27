import express from 'express';
import routes from '../routes';
import { home, search } from '../controllers/videoController';
import {
  logout,
  getLogin,
  postLogin,
  postJoin,
  getJoin,
} from '../controllers/userController';

export const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postJoin); // postJoin 미들웨어로 유저를 가입, postJoin 컨트롤러에서 로그인 처리

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;
