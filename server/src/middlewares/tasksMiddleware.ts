import { NextFunction, Request, Response } from 'express';
import { UploadedFile } from 'express-fileupload';

import { constants } from '../constants/constants';
import { model } from '../models';
import { tasksService } from '../services/tasksService';

class TasksMiddleware {
    async emptyFieldQuestion(req: Request, res: Response, next: NextFunction) {
        try {
            const { question, choosePositiveAnswer } = req.body;
            if (choosePositiveAnswer === 'true' && question === '') {
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
            if (chooseMissingWord === 'true') {
                const arrayWords = word.split(' ');
                if (arrayWords.length > 1) {
                    res.status(400).json('Field word must be without space');
                    return;
                }
            }
            const cyrillicPattern = /^[\u0400-\u04FF]+$/;
            if (chooseMissingWord === 'true') {
                if (cyrillicPattern.test(word)) {
                    res.status(400).json('Task missing word must be to write only in English.')
                }
                if (cyrillicPattern.test(translate)) {
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
            if (req.body.chooseImage === 'false') {
                next();
            } else {
                const { name, size, mimetype } = req.files?.image as UploadedFile;
                if (size > constants.IMAGE_SIZE) {
                    res.status(400).json(`File ${name} is too big`);
                    return;
                }
                if (!constants.IMAGE_MIMETYPES.includes(mimetype)) {
                    res.status(400).json('Only .png, .jpg, .svg, .jpeg, .gif, .webp format allowed!');
                    return;
                }
                const arrayChooseImage = await tasksService.getTasksForChooseImage(req.body.chooseImage === 'true');
                if (arrayChooseImage.length < 3) {
                    res.status(400)
                        .json(`Need to add more tasks with chooseAnswer. Now ${arrayChooseImage.length} and need min 2`);
                    return;
                }
                next();
            }
        } catch (e) {
            next(e);
        }
    }

    async findSimilarTasks(req: Request, res: Response, next: NextFunction) {
        try {
            const { answer, chooseImage, choosePositiveAnswer, chooseAnswer, chooseMissingWord } = req.body;
            let exist;
            if (chooseAnswer === 'true') {
                exist = await model.Task.findOne({ where: {chooseAnswer: true, answer } });
                if (exist) {
                    res.status(400).json(`Task with this answer: ${answer} is already exist`);
                    return;
                }
            }
            if (chooseImage === 'true') {
                exist = await model.Task.findOne({ where: { chooseImage: true, answer } });
                if (exist) {
                    res.status(400).json(`Task with this answer: ${answer} is already exist`);
                    return;
                }
            }
            if (choosePositiveAnswer === 'true') {
                exist = await model.Task.findOne({ where: { choosePositiveAnswer: true, answer } });
                console.log(exist);
                if (exist) {
                    res.status(400).json(`Task with this answer: ${answer} is already exist`);
                    return;
                }
            }
            if (chooseMissingWord === 'true') {
                exist = await model.Task.findOne({ where: { chooseMissingWord: true, answer } });
                if (exist) {
                    res.status(400).json(`Task with this answer: ${answer} is already exist`);
                    return;
                }
            }
            next();
        } catch (e) {
            next(e)
        }
    }
}

export const tasksMiddleware = new TasksMiddleware();