import { Server } from '@/adapters/in/express/server';
import { PinoLogger } from '@/adapters/out/pino/pinoClient';
import { Configuration } from '@/config';

import { createApiRouter } from './apiRouter';
import { createRouter } from './router';

export const createServer = (config: Configuration, logger: PinoLogger): Server => {
    const apiRouter = createRouter(createApiRouter(), logger);

    return new Server(apiRouter, logger, config.server);
};
