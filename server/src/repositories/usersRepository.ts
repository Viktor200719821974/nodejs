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
            .select([
                'user.id',
                'user.email',
                'user.firstName',
                'user.lastName',
                'user.age',
                'user.phone',
                'user.is_active',
                'user.is_staff',
                'user.is_superuser',
            ])
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
        // return getManager().getRepository(User).findOne({ email });
        return getManager().getRepository(User)
            .createQueryBuilder('user')
            .where('user.email = :email', { email })
            .andWhere('user.deletedAt IS NULL')
            .select([
                'user.id',
                'user.email',
                'user.firstName',
                'user.lastName',
                'user.age',
                'user.phone',
                'user.is_active',
                'user.is_staff',
                'user.is_superuser',
            ])
            .getOne();
    }

    public async getUserByEmailMiddleware(email: string): Promise<IUser | undefined> {
        return getManager().getRepository(User).findOne({ email });
    }

    async userManager(id: number): Promise<User | undefined> {
        await getManager().getRepository(User).update({ id }, { is_staff: true });
        return getManager().getRepository(User).findOne({ id });
    }

    async userIsNotManager(id: number): Promise<User | undefined> {
        await getManager().getRepository(User).update({ id }, { is_staff: false });
        return getManager().getRepository(User).findOne({ id });
    }

    async userBlocked(id: number): Promise<User | undefined> {
        await getManager().getRepository(User).update({ id }, { is_active: false });
        return getManager().getRepository(User).findOne({ id });
    }

    async userUnlocked(id: number): Promise<User | undefined> {
        await getManager().getRepository(User).update({ id }, { is_active: true });
        return getManager().getRepository(User).findOne({ id });
    }

    async activateUser(activateToken: string): Promise<string> {
        const id = await getManager().getRepository(User).findOne({ activateToken })
            .then((data) => data?.id);
        await getManager().getRepository(User).update({ id }, { is_active: true });
        await getManager().getRepository(User).update({ id }, { activateToken: 'activate' });
        return 'Ok';
    }
}

export const usersRepository = new UsersRepository();
