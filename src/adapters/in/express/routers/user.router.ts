import { Router } from 'express';

import { UserController } from '@/adapters/in/express/controllers/user.controller';

export const createUserRouter = (): Router => {
    const userRouter = Router();
    const userController: UserController = new UserController();

    userRouter.get('/:id', userController.getUserById);

    return userRouter;
};
