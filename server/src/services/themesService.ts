import { model } from '../models';
import { ITheme } from '../interfaces';

class ThemesService {
    async getThemes(): Promise<ITheme[]> {
        return model.Theme.findAll();
    }

    async createTheme(title: string): Promise<ITheme> {
        // @ts-ignore
        return model.Theme.create({ title });
    }
}

export const themesService = new ThemesService();
