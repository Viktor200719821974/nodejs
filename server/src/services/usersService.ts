import { IUser } from '../interfaces';
import { model } from '../models';

class UsersService {
    async getUsers(): Promise<IUser[]> {
        return model.User.findAll(
            {
                attributes: {
                    exclude: ['password', 'createdAt', 'updatedAt', 'activateToken'],
                },
            },
        );
    }

    async getUserById(id: number): Promise<IUser | null> {
        return model.User.findOne({
            attributes: {
                exclude: ['password', 'createdAt', 'updatedAt', 'activateToken'],
            },
            include: [
                {model: model.AgendaUser, as: 'agenda'}
            ],
            where: { id },
        });
    }

    async getUserByEmail(email: string): Promise<IUser | null> {
        return model.User.findOne({
            attributes: {
                exclude: ['password', 'createdAt', 'updatedAt', 'activateToken'],
            },
            where: { email },
        });
    }

    async deleteUser(id:string): Promise<void> {
        await model.User.destroy({ where: { id } });
    }

    async userManager(id: number): Promise<IUser | null> {
        await model.User.update({ is_staff: true }, { where: { id } });
        return model.User.findByPk(id);
    }

    async userIsNotManager(id: number): Promise<IUser | null> {
        await model.User.update({ is_staff: false }, { where: { id } });
        return model.User.findByPk(id);
    }

    async userBlocked(id: number): Promise<IUser | null> {
        await model.User.update({ is_active: false }, { where: { id } });
        return model.User.findByPk(id);
    }

    async userUnlocked(id: number): Promise<IUser | null> {
        await model.User.update({ is_active: true }, { where: { id } });
        return model.User.findByPk(id);
    }

    async activateUser(id: number): Promise<void> {
        await model.User.update(
            {
                is_active: true,
                activateToken: '',
            },
            {
                where: { id },
            },
        );
    }

    async updateStatisticUser(id: number) {
        return model.User.update({ statistic: true }, { where: { id } });
    }

    async updateUserLessonId(id: number, lesson_id: number): Promise<IUser | null> {
        await model.User.update( { lesson_id }, { where: { id } });
        return model.User.findOne( { where: { id } });
    }
}

export const usersService = new UsersService();
