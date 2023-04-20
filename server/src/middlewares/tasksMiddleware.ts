import { NextFunction, Request, Response } from 'express';
import { UploadedFile } from 'express-fileupload';

import { constants } from '../constants/constants';

class TasksMiddleware {
    async emptyFieldQuestion(req: Request, res: Response, next: NextFunction) {
        try {
            const { question, choosePositiveAnswer } = req.body;
            if (choosePositiveAnswer === true && question === '') {
                res.status(400).json('Field question can not be empty');
                return;
            }
            next();
        } catch (e) {
            next(e);
        }
    }
    
    async onlyOneWord(req: Request, res: Response, next: NextFunction) {
        try {
            const { word, chooseMissingWord, translate } = req.body;
            if (chooseMissingWord === true) {
                const arrayWords = word.split(' ');
                if (arrayWords.length > 1) {
                    res.status(400).json('Field word must be without space');
                    return;
                }
            }
            const cyrillicPattern = /^[\u0400-\u04FF]+$/;
            if (chooseMissingWord === true) {
                if (cyrillicPattern.test(word)) {
                    res.status(400).json('Task missing word must be to write only in English.')
                }
                if (!cyrillicPattern.test(translate)) {
                    res.status(400).json('Translate of answer missing word must be to write only in Ukraine.')
                }
            }
            next();
        } catch (e) {
            next(e);
        }
    }

    async checkImageTask(req: Request, res: Response, next: NextFunction) {
        try {
            
            if (!req.files?.image) {
                next();
            }
            const { name, size, mimetype } = req.files?.image as UploadedFile;
            if (size > constants.IMAGE_SIZE) {
                res.status(400).json(`File ${name} is too big`);
                return;
            }
            if (!constants.IMAGE_MIMETYPES.includes(mimetype)) {
                res.status(400).json('Only .png, .jpg, .svg, .jpeg, .gif, .webp format allowed!');
                return;
            }
            next();
        } catch (e) {
            next(e);
        }
    }
}

export const tasksMiddleware = new TasksMiddleware();