import { Router } from 'express';

import { handleHealthCheck } from './handlers/healthCheckHandler';
import { handleIndex } from './handlers/indexHandler';

export const createApiRouter = (): Router => {
    const apiRouter = Router();
    apiRouter.get('/', handleIndex);
    apiRouter.get('/healthcheck', handleHealthCheck);

    return apiRouter;
};
