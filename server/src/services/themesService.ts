import { model } from '../models';
import { ITheme } from '../interfaces';
import { UploadedFile } from 'express-fileupload';
import { saveImageService } from './saveImageService';

class ThemesService {
    async getThemes(): Promise<ITheme[]> {
        return model.Theme.findAll({
            include: [
                { model: model.Module, as: 'module', 
                    include: [ 
                        { model: model.Lesson, as: 'lessons' } 
                    ]
                },
                
            ]
        });
    }

    async createTheme(
        title: string, 
        background_theme: string | null, 
        imageLeft: UploadedFile, 
        imageRight: UploadedFile,
    ): Promise<ITheme> {
        let fileNameLeft;
        if (imageLeft !== undefined) {
            fileNameLeft = await saveImageService.saveImage(imageLeft);
        } else {
            fileNameLeft = null;
        }
        let fileNameRight;
        if (imageRight !== undefined) {
            fileNameRight = await saveImageService.saveImage(imageRight);
        } else {
            fileNameRight = null;
        }
        if (background_theme === 'null') {
            background_theme = '#58cc02';
        }
        // @ts-ignore
        return model.Theme.create({ title, background_theme, image_left: fileNameLeft, image_right: fileNameRight });
    }
}

export const themesService = new ThemesService();
