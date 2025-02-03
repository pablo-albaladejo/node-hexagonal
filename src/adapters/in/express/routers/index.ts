import compression from 'compression';
import cors from 'cors';
import express, { Router } from 'express';
import helmet from 'helmet';

import { createErrorMiddleware } from '@/adapters/in/express/middlewares/errorMiddleware';
import { createApiRouter } from '@/adapters/in/express/routers/api.router';
import { type Logger } from '@/application/ports/logger';

export const createRouter = (logger: Logger): Router => {
    const router = Router();
    const errorMiddleware = createErrorMiddleware(logger);
    const apiRouter = createApiRouter();

    router
        .use(helmet())
        .use(cors())
        .use(express.json())
        .use(express.urlencoded({ extended: false }))
        .use(compression());

    router.use(apiRouter);

    router.use(errorMiddleware.routeNotFoundHandler);
    router.use(errorMiddleware.clientErrorHandler);
    router.use(errorMiddleware.validationErrorHandler);
    router.use(errorMiddleware.customErrorHandler);
    router.use(errorMiddleware.globalErrorHandler);

    return router;
};
