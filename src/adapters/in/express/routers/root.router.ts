import { Router } from 'express';

import { RootController } from '@/adapters/in/express/controllers/root.controller';

export const createRootRouter = () => {
    const rootRouter = Router();
    const rootController: RootController = new RootController();

    rootRouter.get('/', rootController.handleIndex);

    return rootRouter;
};
