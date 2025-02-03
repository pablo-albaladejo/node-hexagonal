import { UserRepository } from '@/application/ports/in/user.repository';
import { User } from '@/domain/entities/user.entity';

export class UserService implements UserService {
    constructor(private userRepository: UserRepository) {}

    getUserById = async (id: string): Promise<User | null> => {
        return this.userRepository.getUserById(id);
    };
}
