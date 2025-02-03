import { config } from '@/infrastructure/config';
import { PinoLogger } from '@/infrastructure/pino-client';

export const logger = new PinoLogger(config.logger, config.server.appName);
