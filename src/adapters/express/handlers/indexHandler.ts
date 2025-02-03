import { RequestHandler } from 'express';

export const handleIndex: RequestHandler = (_, response): void => {
    response.status(200).json({
        message: 'Hello Express Starter!',
    });
};
