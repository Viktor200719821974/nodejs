import bcrypt from 'bcrypt';
import { IUser } from '../entity/user';
import { authRepository } from '../repositories/authRepository';

class AuthService {
    public async registration(user: IUser): Promise<IUser> {
        const { password } = user;
        const hashedPassword = await this._hashPassword(password);
        const dataToSave = { ...user, password: hashedPassword };
        return authRepository.registration(dataToSave);
    }

    private async _hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }
}

export const authService = new AuthService();
