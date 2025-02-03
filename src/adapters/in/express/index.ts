import { createRouter } from '@/adapters/in/express/routers';
import { Server } from '@/adapters/in/express/server';
import { Configuration } from '@/infrastructure/config';
import { PinoLogger } from '@/infrastructure/pino-client';

export const createServer = (config: Configuration, logger: PinoLogger): Server => {
    const apiRouter = createRouter(logger);

    return new Server(apiRouter, logger, config.server);
};
