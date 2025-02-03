import { UserService } from '@/application/services/user.service';

const userService = new UserService();

export const dependencies = {
    userService,
};

export type Dependencies = typeof dependencies;
