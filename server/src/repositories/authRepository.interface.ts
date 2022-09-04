import { IUser } from '../entity/user';

export interface IAuthRepository {
    registration(user: IUser): Promise<IUser>;
}
