import { Request, Response } from 'express';

export class UserController {
    getUserById = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;

        res.json({ id });
    };
}
