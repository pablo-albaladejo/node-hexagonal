import { Router } from 'express';

import { HealthCheckController } from '@/adapters/in/express/controllers/health-check.controller';

export const createHealthCheckRouter = (): Router => {
    const healthCheckRouter = Router();
    const healthController: HealthCheckController = new HealthCheckController();

    healthCheckRouter.get('/', healthController.handleHealthCheck);

    return healthCheckRouter;
};
