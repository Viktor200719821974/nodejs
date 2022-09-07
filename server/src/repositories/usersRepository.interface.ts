import { DeleteResult } from 'typeorm';
import { IUser, User } from '../entity/user';

export interface IUsersRepository {
    getUsers(users: User[]): Promise<User[]>;
    getUserById(id: number): Promise<IUser | undefined>;
    changeUser(user: IUser, id: number): Promise<IUser | undefined>;
    deletedUser(id: string): Promise<DeleteResult>;
    getUserByEmail(email: string): Promise<IUser | undefined>;
    getUserByEmailMiddleware(email: string): Promise<IUser | undefined>;
    userManager(id: number): Promise<IUser | undefined>;
    userIsNotManager(id: number): Promise<IUser | undefined>;
    userBlocked(id: number): Promise<IUser | undefined>;
    userUnlocked(id: number): Promise<IUser | undefined>;
    activateUser(activateToken: string): Promise<string>;
}
