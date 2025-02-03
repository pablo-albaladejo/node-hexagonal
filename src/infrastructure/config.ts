import 'dotenv/config';

export const config = {
    server: {
        appName: process.env.APP_NAME ?? 'express-starter',
        environment: process.env.NODE_ENV ?? 'development',
        port: Number(process.env.PORT ?? 3000),
    },
    logger: {
        logLevel: process.env.APP_LOG_LEVEL ?? 'debug',
    },
};

export type Configuration = typeof config;
export type ClientConfiguration<K extends keyof typeof config> = Configuration[K];
