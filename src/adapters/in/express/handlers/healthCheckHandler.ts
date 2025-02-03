import { RequestHandler } from 'express';

export const handleHealthCheck: RequestHandler = (_, response): void => {
    response.status(200).json({ success: true, timestamp: new Date().getTime() });
};
