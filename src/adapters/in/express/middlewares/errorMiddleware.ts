import { ErrorRequestHandler, RequestHandler } from 'express';

import { Logger } from '@/application/ports/logger';
import { AppError, ValidationError } from '@/shared/errors';

export const createErrorMiddleware = (logger: Logger) => ({
    routeNotFoundHandler: handleRouteNotFound,
    clientErrorHandler: handleClientError,
    validationErrorHandler: handleValidationError,
    customErrorHandler: handleCustomError,
    globalErrorHandler: handleGlobalError(logger),
});

export const defaultHttpErrorCode = 500;

const handleRouteNotFound: RequestHandler = (_, response): void => {
    response.status(404).json({ status: 404, message: 'Route not found' });
};

const handleClientError: ErrorRequestHandler = (error, _, response, next): void => {
    if (response !== undefined && !response.headersSent) {
        next(error);
    }
};

const handleValidationError: ErrorRequestHandler = (error, _, response, next): void => {
    if (error instanceof ValidationError) {
        response.status(error.status).json(error);
    } else {
        next(error);
    }
};

const handleCustomError: ErrorRequestHandler = (error, _, response, next): void => {
    if (error instanceof AppError) {
        response.status(error.status).json(error);
    } else {
        next(error);
    }
};

const handleGlobalError =
    (logger: Logger): ErrorRequestHandler =>
    (error: Error, _, response): void => {
        logger.error(error.message ?? error);
        response.status(defaultHttpErrorCode).json({
            status: defaultHttpErrorCode,
            error: 'Something wrong happened :`(',
        });
    };
