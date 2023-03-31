import { Request, Response, NextFunction } from 'express';
import { themesService } from '../services/themesService';

class ThemesController {
    async getThemes(req: Request, res: Response, next: NextFunction) {
        try {
            const themes = await themesService.getThemes();
            res.status(200).json(themes);
        } catch (e) {
            next(e);
        }
    }

    async createTheme(req: Request, res: Response, next: NextFunction) {
        try {
            const { title } = req.body;
            const theme = await themesService.createTheme(title);
            res.status(201).json(theme);
        } catch (e) {
            next(e);
        }
    }
}
export const themesController = new ThemesController();
