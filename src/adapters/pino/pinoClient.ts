import { Logger } from '@application/services/logger';
import pino, { HttpLogger } from 'pino-http';

import { ClientConfiguration } from '@/config';

export class PinoLogger implements Logger {
    private readonly client;
    private readonly appName: string;

    constructor(config: ClientConfiguration<'logger'>, appName: string) {
        this.appName = appName;
        this.client = pino({
            name: this.appName,
            level: config.logLevel,
            customReceivedMessage: (req) => `HTTP ${req.method} ${req.url} Request received`,
            customSuccessMessage: (req, res) =>
                `HTTP ${req.method} ${req.url} ${res.statusCode} Response sent`,
            customReceivedObject: (req) => ({
                eventCode: 'REQUEST_RECEIVED',
                method: req.method,
                url: req.url,
            }),
            customSuccessObject: (_, res) => ({
                eventCode: 'RESPONSE_SENT',
                status: res.statusCode,
                headers: res.getHeaders(),
            }),
            redact: this.getRedactedParams(),
            transport: this.getTransports(config),
        });
    }

    private getTransports(config: ClientConfiguration<'logger'>) {
        return {
            targets: [
                {
                    target: 'pino-pretty',
                    level: config.logLevel,
                    options: {
                        singleLine: true,
                        colorize: true,
                        levelFirst: true,
                        relativeUrl: true,
                        translateTime: 'SYS:standard',
                        ignore: 'pid,host,req,res',
                    },
                },
            ],
        };
    }

    private getRedactedParams() {
        return {
            paths: ['req.headers.authorization', 'headers["x-accesstoken"]'],
            censor: '***',
        };
    }

    public getClient(): HttpLogger {
        return this.client;
    }

    public getLogLevel(): string {
        return this.client.logger.level;
    }

    public debug(message: string, metadata: object = {}): void {
        this.client.logger.debug(metadata, message);
    }

    public info(message: string, metadata: object = {}): void {
        this.client.logger.info(metadata, message);
    }

    public error(message: string, metadata: object = {}): void {
        this.client.logger.error(metadata, message);
    }

    public warning(message: string, metadata: object = {}): void {
        this.client.logger.warn(metadata, message);
    }

    public fatal(message: string, metadata: object = {}): void {
        this.client.logger.fatal(metadata, message);
    }
}
