import express from 'express';
import * as http from 'http';
import { type AddressInfo } from 'net';

import { type PinoLogger } from '@/adapters/out/pino/pinoClient';
import { type ClientConfiguration } from '@/config';

export class Server {
    private readonly express: express.Application;
    private http: http.Server;

    constructor(
        private readonly router: express.Router,
        private readonly logger: PinoLogger,
        private readonly config: ClientConfiguration<'server'>,
    ) {
        this.http = http as unknown as http.Server;
        this.express = express();
        this.router = router;
        this.config = config;
        this.express.use(logger.getClient());
        this.express.use(this.router);
        this.logger.debug('Server instance created');
    }

    public start = async (): Promise<void> => {
        await new Promise<void>((resolve) => {
            this.http = this.express.listen(this.config.port, () => {
                const { port } = this.http.address() as AddressInfo;
                this.logger.info(`🚀 Application ${this.config.appName} running on PORT ${port}`, {
                    port,
                    environment: this.config.environment,
                    logLevel: this.logger.getLogLevel(),
                });
                resolve();
            });
        });
    };

    public stop = async (): Promise<void> => {
        this.logger.info('Stopping http server...');
        this.http.close();
    };
}
