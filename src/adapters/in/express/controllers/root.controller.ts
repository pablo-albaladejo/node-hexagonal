import { RequestHandler } from 'express';

export class RootController {
    public handleIndex: RequestHandler = (_, response): void => {
        response.status(200).json({
            message: 'Hello Express Starter!',
        });
    };
}
