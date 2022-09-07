import { DeleteResult, getManager } from 'typeorm';
import { IUser, User } from '../entity/user';
import { usersRepository } from '../repositories/usersRepository';

class UsersService {
    public async getUsers(): Promise<User[]> {
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

    async userManager(id: number): Promise<IUser | undefined> {
        return usersRepository.userManager(id);
    }

    async userIsNotManager(id: number): Promise<IUser | undefined> {
        return usersRepository.userIsNotManager(id);
    }

    async userBlocked(id: number): Promise<IUser | undefined> {
        return usersRepository.userBlocked(id);
    }

    async userUnlocked(id: number): Promise<IUser | undefined> {
        return usersRepository.userUnlocked(id);
    }

    async activateUser(activateToken: string): Promise<string> {
        return usersRepository.activateUser(activateToken);
    }
}

export const usersService = new UsersService();
