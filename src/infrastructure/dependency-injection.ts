import { UserService } from '@/application/services/user.service';
import { InMemoryUserRepository } from '@/infrastructure/databases/inmemory-user.repository';

const userRepository = new InMemoryUserRepository();
const userService = new UserService(userRepository);

export const dependencies = {
    userService,
};

export type Dependencies = typeof dependencies;
