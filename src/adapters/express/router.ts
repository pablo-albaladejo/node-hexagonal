import { type Logger } from '@application/services/logger';
import compression from 'compression';
import cors from 'cors';
import express, { Router } from 'express';
import helmet from 'helmet';

import { createErrorMiddleware } from './middlewares/errorMiddleware';

export const createRouter = (apiRouter: Router, logger: Logger): Router => {
    const router = Router();
    const errorMiddleware = createErrorMiddleware(logger);

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
