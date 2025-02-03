#!/usr/bin/env node

import { createServer } from '@adapters/in/express';

import { Server } from '@/adapters/in/express/server';
import { logger } from '@/adapters/out/pino';
import { config } from '@/config';

const server: Server = createServer(config, logger);

const startServer = async (): Promise<void> => {
    await server.start();
};

startServer().catch(async (error: Error) => {
    logger.error(error.message);
    await server.stop();
    process.exit(1);
});
