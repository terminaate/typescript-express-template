import {Router} from 'express';
import ServerController from '../controllers/server.controller';

const serverRouter = Router();

serverRouter.get('/ping', ServerController.ping);
serverRouter.use('/*', ServerController.notFound);

export default serverRouter;
