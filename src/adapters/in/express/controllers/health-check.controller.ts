import { RequestHandler } from 'express';

export class HealthCheckController {
    handleHealthCheck: RequestHandler = (_, response): void => {
        response.status(200).json({ success: true, timestamp: new Date().getTime() });
    };
}
