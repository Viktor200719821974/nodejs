import {
    DeleteResult, EntityRepository, getManager, Repository,
} from 'typeorm';
import { IUser, User } from '../entity/user';
import { IUsersRepository } from './usersRepository.interface';

@EntityRepository(User)
class UsersRepository extends Repository<User> implements IUsersRepository {
    public async getUsers(users: User[]): Promise<User[]> {
        return getManager().getRepository(User).find();
    }

    public async getUserById(id: number): Promise<IUser | undefined> {
        return getManager().getRepository(User)
            .createQueryBuilder('user')
            .where('user.id = :id', { id })
            .andWhere('user.deletedAt IS NULL')
            .getOne();
    }

    public async changeUser(user: IUser, id: number): Promise<IUser | undefined> {
        await getManager().getRepository(User).update({ id }, {
            ...user,
        });
        return getManager().getRepository(User).findOne({ id });
    }

    public async deletedUser(id: string): Promise<DeleteResult> {
        return getManager().getRepository(User).softDelete({ id: Number(id) });
    }

    public async getUserByEmail(email: string): Promise<IUser | undefined> {
        return getManager().getRepository(User).findOne({ email });
        // return getManager().getRepository(User)
        //     .createQueryBuilder('user')
        //     .where('user.email = :email', { email })
        //     .andWhere('user.deletedAt IS NULL')
        //     .getOne();
    }
}

export const usersRepository = new UsersRepository();
