import { NextFunction, Request, Response } from 'express';

class TasksMiddleware {
    async emptyFieldQuestion(req: Request, res: Response, next: NextFunction) {
        try {
            const { question, choosePositiveAnswer } = req.body;
            if (choosePositiveAnswer && question === '') {
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
            if (chooseMissingWord) {
                const arrayWords = word.split(' ');
                if (arrayWords.length > 1) {
                    res.status(400).json('Field word must be without space');
                    return;
                }
            }
            const cyrillicPattern = /^[\u0400-\u04FF]+$/;
            if (cyrillicPattern.test(word)) {
                res.status(400).json('Task missing word must be to write only in English.')
            }
            if (!cyrillicPattern.test(translate)) {
                res.status(400).json('Translate of answer missing word must be to write only in Ukraine.')
            }
            next();
        } catch (e) {
            next(e);
        }
    }
}

export const tasksMiddleware = new TasksMiddleware();