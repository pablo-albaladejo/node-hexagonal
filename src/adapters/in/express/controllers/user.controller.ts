import { Request, Response } from 'express';

import { UserDTO } from '@/application/dtos/user.dto';
import { UserService } from '@/application/services/user.service';

export class UserController {
    constructor(private userService: UserService) {}

    getUserById = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;

        const user: UserDTO = await this.userService.getUserById(id);

        res.json(user);
    };
}
