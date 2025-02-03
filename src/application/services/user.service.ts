import { UserDTO } from '@application/dtos/user.dto';

export class UserService {
    getUserById = async (id: string): Promise<UserDTO> => {
        return { id, name: 'John Doe' };
    };
}
