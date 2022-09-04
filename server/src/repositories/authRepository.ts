import { EntityRepository, getManager, Repository } from 'typeorm';
import { IUser, User } from '../entity/user';
import { IAuthRepository } from './authRepository.interface';

@EntityRepository(User)
class AuthRepository extends Repository<User> implements IAuthRepository {
    public async registration(user: IUser): Promise<IUser> {
        return getManager().getRepository(User).save(user);
    }
}

export const authRepository = new AuthRepository();
