import express from 'express';
import UserController from './app/controllers/UserController';

const routes = express.Router();

routes.post('/create', UserController.create);

export default routes;
