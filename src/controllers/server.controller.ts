import {NextFunction, Request, Response} from 'express';
import ServerService from '../services/server.service';


class ServerController {

    async ping(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await ServerService.ping();
            res.status(200).json(data);
        } catch (e) {
            next(e);
        }
    }

    async notFound(req: Request, res: Response, next: NextFunction) {
        try {
            res.status(404).json({error: 'endpoint not found', code: 404});
        } catch (e) {
            next(e);
        }
    }
}

export default new ServerController();
