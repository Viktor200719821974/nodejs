import { NextFunction, Request, Response } from 'express';
import { UploadedFile } from 'express-fileupload';

import { tasksService } from '../services/tasksService';

class TasksController {
    async getTasks(req: Request, res: Response, next: NextFunction) {
        try {
            let {
                themeId,
                chooseImage,
                chooseAnswer,
                choosePositiveAnswer,
                chooseMissingWord,
                chooseTranslateWords,
                question,
                word,
                answer,
                lessonId,
                taskId,
            } = req.query;
            const tasks = await tasksService
                .getTasks(
                    // @ts-ignore
                    themeId,
                    chooseImage === 'true',
                    chooseAnswer === 'true',
                    choosePositiveAnswer === 'true',
                    chooseMissingWord === 'true',
                    chooseTranslateWords === 'true',
                    question,
                    word,
                    answer,
                    lessonId,
                    taskId,
                );
            res.status(200).json(tasks);
        } catch (e) {
            next(e);
        }
    }

    async getTasksForTheme(req: Request, res: Response, next: NextFunction) {
        try {
            const { themeId } = req.params;
            const tasks = await tasksService.getTasksForTheme(+themeId);
            res.status(200).json(tasks);
        } catch (e) {
            next(e);
        }
    }

    async createTask(req: Request, res: Response, next: NextFunction) {
        try {
            const image = req.files?.image as UploadedFile;
            const {
                chooseImage, 
                chooseAnswer, 
                chooseMissingWord, 
                choosePositiveAnswer, 
                chooseTranslateWords, 
                themeId, 
                word, 
                answer,
                translate,
                question,
            } = req.body;
            if (chooseImage === true && image === undefined) {
                res.status(400).json('No image');
                return;
            }
            const task = await tasksService.createTask(
                chooseImage === 'true', 
                chooseAnswer === 'true',
                chooseMissingWord === 'true',
                choosePositiveAnswer === 'true',
                chooseTranslateWords === 'true',
                +themeId,
                word,
                answer,
                question,
                translate,
                image,
            );
            res.status(201).json(task);
        } catch (e) {
            next(e);
        }
    }

    async deleteTask(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        await tasksService.deleteTask(+id);
        res.status(200).json('Deleted');
    }
}

export const tasksController = new TasksController();
