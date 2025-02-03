import { Router } from 'express';

import { HealthCheckController } from '@/adapters/in/express/controllers/health-check.controller';
import { RootController } from '@/adapters/in/express/controllers/root.controller';

export const createApiRouter = (): Router => {
    const apiRouter = Router();

    const rootController: RootController = new RootController();
    const healthController: HealthCheckController = new HealthCheckController();

    apiRouter.get('/', rootController.handleIndex);
    apiRouter.get('/healthcheck', healthController.handleHealthCheck);

    return apiRouter;
};
