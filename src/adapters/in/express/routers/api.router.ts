import { Router } from 'express';

import { createHealthCheckRouter } from '@/adapters/in/express/routers/health-check.router';
import { createRootRouter } from '@/adapters/in/express/routers/root.router';
import { createUserRouter } from '@/adapters/in/express/routers/user.router';

export const createApiRouter = (): Router => {
    const apiRouter = Router();

    const rootRouter = createRootRouter();
    const healthCheckRouter = createHealthCheckRouter();
    const userRouter = createUserRouter();

    apiRouter.use('/', rootRouter);
    apiRouter.use('/healthcheck', healthCheckRouter);
    apiRouter.use('/user', userRouter);

    return apiRouter;
};
