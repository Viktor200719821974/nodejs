import bcrypt from 'bcrypt';

import { config } from '../config';
import { ITokenActivate, ITokenPair, IUser } from '../interfaces';
import { model } from '../models';
import { tokenService } from './tokenService';

class AuthService {
    async registration(user: IUser, password: string, userEmail: string): Promise<ITokenActivate> {
        if (user.name === '') {
            // eslint-disable-next-line no-param-reassign
            user.name = 'Anonymous';
        }
        const themes = await model.Theme.findAll();
        let moduleId = 1;
        let lessonId = 1;
        if (themes) {
            const theme = themes.sort((a, b) => a.id - b.id)[0];
            const themeId = theme.id;
            const modules = await model.Module.findAll({ where: { themeId } });
            if (modules) {
                const module = modules.sort((a, b) => a.id - b.id)[0];
                moduleId = module.id;
                const lessons = await model.Lesson.findAll({ where: { themeId, moduleId } });
                if (lessons) {
                    const lesson = lessons.sort((a, b) => a.id - b.id)[0];
                    lessonId = lesson.id;
                }
            }
        } 
        const hashedPassword = await AuthService._hashPassword(password);
        const id = await model.User
            .create({ ...user, password: hashedPassword, module_id: moduleId, lesson_id: lessonId })
            .then((data) => data.id);
        const tokenActivate = await tokenService.generateTokenActivate({ userId: id, userEmail });
        //@ts-ignore
        await model.AgendaUser.create({ userId: id })
        await model.User.update(
            {
                activateToken: tokenActivate.activateToken,
            },
            {
                where: { id },
            },
        );
        return tokenActivate;
    }

    async login(userEmail: string, userId: number): Promise<ITokenPair> {
        const { accessToken, refreshToken } = await tokenService
            .generateTokenPair({ userId, userEmail });
        const exists = await model.Token.findOne({ where: { userId } });
        if (exists) {
            await tokenService.deleteTokenPair(userId);
        }
        // @ts-ignore
        await tokenService.saveToken({ accessToken, refreshToken, userId });
        return { accessToken, refreshToken, userId };
    }

    async forgetPassword(userEmail: string) {
        const user = await model.User.findOne({ where: { email: userEmail } });
        const userId = user?.id;
        const userName = user?.name;
        // @ts-ignore
        const { activateToken } = await tokenService.generateTokenActivate({ userId, userEmail });
        await model.User.update({ activateToken }, { where: { id: userId } });
        return {
            activateToken,
            userName,
        };
    }

    async changePassword(password: string, id: number) {
        const hashedPassword = await AuthService._hashPassword(password);
        await model.User.update(
            {
                password: hashedPassword, activateToken: '',
            },
            {
                where: { id },
            },
        );
    }

    private static async _hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, Number(config.USER_SALT_ROUNDS));
    }
}

export const authService = new AuthService();
