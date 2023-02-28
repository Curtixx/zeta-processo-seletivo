import { Router } from 'express';
import UserController from './controllers/UserController';
import { loginRequired } from './middlewares/loginRequired';
import TokenLoginController from './controllers/TokenLoginController';
const routes = Router()

routes.post('/create', UserController.store)
routes.post('/token', TokenLoginController.login)
routes.get('/show/:id', UserController.show)
routes.get('/', UserController.index)
routes.delete('/:id', loginRequired, UserController.delete)
routes.put('/:id', loginRequired, UserController.update)

export default routes