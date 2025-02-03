import { Request, Response } from 'express';

import { UserService } from '@/application/services/user.service';
export class UserController {
    constructor(private userService: UserService) {}

    getUserById = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;

        const user = await this.userService.getUserById(id);

        if (!user) {
            res.status(404).send('User not found');
            return;
        }

        res.json(user);
    };
}
