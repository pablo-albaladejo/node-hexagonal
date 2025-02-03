import { Router } from 'express';

import { UserController } from '@/adapters/in/express/controllers/user.controller';
import { dependencies } from '@/infrastructure/dependency-injection';

export const createUserRouter = (): Router => {
    const userRouter = Router();
    const userController: UserController = new UserController(dependencies.userService);

    userRouter.get('/:id', userController.getUserById);

    return userRouter;
};
