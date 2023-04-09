import { NextFunction, Request, Response } from 'express';
import { UploadedFile } from 'express-fileupload';

import { tasksService } from '../services/tasksService';

class TasksController {
    async getTasks(req: Request, res: Response, next: NextFunction) {
        try {
            const tasks = await tasksService.getTasks();
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
                chooseImage, choosePositiveAnswer, themeId, chooseAnswer,
            } = req.body;
            if (chooseImage === true && image === undefined) {
                res.status(400).json('No image');
                return;
            }
            if (choosePositiveAnswer) {
                const arrayTasks = await tasksService
                    .getTasksForThemeAndChooseAnswer(themeId, chooseAnswer);
                if (arrayTasks.length < 3) {
                    res.status(400)
                        .json(`Need to add more tasks with chooseAnswer. Now ${arrayTasks.length} and need min 3`);
                    return;
                }
            }
            const task = await tasksService.createTask(req.body, image);
            res.status(201).json(task);
        } catch (e) {
            next(e);
        }
    }
}

export const tasksController = new TasksController();
