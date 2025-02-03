import { Server } from '@/adapters/in/express/server';
import { PinoLogger } from '@/adapters/out/pino/pinoClient';
import { Configuration } from '@/config';

import { createRouter } from './routers';

export const createServer = (config: Configuration, logger: PinoLogger): Server => {
    const apiRouter = createRouter(logger);

    return new Server(apiRouter, logger, config.server);
};
