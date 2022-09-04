import { DeleteResult, getManager } from 'typeorm';
import { IUser, User } from '../entity/user';
import { usersRepository } from '../repositories/usersRepository';

class UsersService {
    public async getUsers(users: User[]): Promise<User[]> {
        return getManager().getRepository(User).find();
    }

    public async getUserById(id: number): Promise<IUser | undefined> {
        return usersRepository.getUserById(id);
    }

    public async changeUser(user: IUser, id: string): Promise<IUser | undefined> {
        return usersRepository.changeUser(user, +id);
    }

    public async deletedUser(id: string): Promise<DeleteResult> {
        return usersRepository.deletedUser(id);
    }

    public async getUserByEmail(email: string): Promise<IUser | undefined> {
        return usersRepository.getUserByEmail(email);
    }

    // private async _hashPassword(password: string): Promise<string> {
    //     return bcrypt.hash(password, 10);
    // }
}

export const usersService = new UsersService();
