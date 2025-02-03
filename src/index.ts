#!/usr/bin/env node

import { createApiRouter } from '@adapters/express/apiRouter';
import { createRouter } from '@adapters/express/router';
import { Server } from '@adapters/express/server';
import { logger } from '@adapters/pino';

import { config } from '@/config';

const apiRouter = createRouter(createApiRouter(), logger);
const server = new Server(apiRouter, logger, config.server);

const startServer = async (): Promise<void> => {
    await server.start();
};

startServer().catch(async (error: Error) => {
    logger.error(error.message);
    await server.stop();
    process.exit(1);
});
