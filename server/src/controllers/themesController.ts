import { Request, Response, NextFunction } from 'express';
import { UploadedFile } from 'express-fileupload';

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
            let { title, background_theme } = req.body;
            let imageLeft = req.files?.imageLeft as UploadedFile;
            let imageRight = req.files?.imageRight as UploadedFile;
            const theme = await themesService.createTheme(title, background_theme, imageLeft, imageRight);
            res.status(201).json(theme);
        } catch (e) {
            next(e);
        }
    }
}
export const themesController = new ThemesController();
