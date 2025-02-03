import { createRouter } from '@/adapters/in/express/routers';
import { Configuration } from '@/infrastructure/config';
import { PinoLogger } from '@/infrastructure/pino-client';
import { Server } from '@/infrastructure/server';

export const createServer = (config: Configuration, logger: PinoLogger): Server => {
    const apiRouter = createRouter(logger);

    return new Server(apiRouter, logger, config.server);
};
