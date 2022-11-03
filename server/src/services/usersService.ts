import { IUser } from '../interfaces';
import { model } from '../models';

class UsersService {
    async getUsers(): Promise<IUser[]> {
        return model.User.findAll(
            {
                attributes: {
                    exclude: ['password', 'createdAt', 'updatedAt', 'activateToken'],
                },
            }
        );
    }

    async getUserById(id: number): Promise<IUser | null> {
        return model.User.findOne({ 
            attributes: {
                exclude: ['password', 'createdAt', 'updatedAt', 'activateToken'],
            }, 
            where: { id } 
        });
    }

    async getUserByEmail(email: string): Promise<IUser | null> {
        return model.User.findOne({
            attributes: {
                exclude: ['password', 'createdAt', 'updatedAt', 'activateToken'],
            }, 
            where: { email } 
        });
    }
}

export const usersService = new UsersService();