import { config } from '@/config';

import { PinoLogger } from './pinoClient';

export const logger = new PinoLogger(config.logger, config.server.appName);
