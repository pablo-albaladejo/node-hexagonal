import { UserRepository } from '@/application/ports/in/user.repository';
import { User } from '@/domain/entities/user.entity';

export class InMemoryUserRepository implements UserRepository {
    users: User[] = [new User('1', 'Alice'), new User('2', 'Bob'), new User('3', 'Charlie')];

    getUserById = async (id: string): Promise<User | null> => {
        const user = this.users.find((user) => user.id === id);
        return Promise.resolve(user ?? null);
    };
}
