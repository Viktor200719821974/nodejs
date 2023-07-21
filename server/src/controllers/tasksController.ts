import { NextFunction, Request, Response } from 'express';
import { UploadedFile } from 'express-fileupload';

import { tasksService } from '../services/tasksService';

class TasksController {
    async getTasks(req: Request, res: Response, next: NextFunction) {
        try {
            const {
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
                createWhat,
            } = req.query;
            let { limit, page } = req.query;
            // @ts-ignore
            page = Number(page) || 1;
            // @ts-ignore
            limit = Number(limit) || 20;
            // @ts-ignore
            const offset = page * limit - limit;
            let tasks;
            if (
                themeId || chooseAnswer || chooseImage || choosePositiveAnswer || chooseMissingWord
                || chooseTranslateWords || question || word || answer || lessonId || taskId
                || createWhat
            ) {
                tasks = await tasksService
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
                        offset,
                        page,
                        limit,
                        createWhat,
                    );
            } else {
                tasks = await tasksService.getAllTasks();
            }
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

    async getTaskById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const task = await tasksService.getTaskById(+id);
            res.status(200).json(task);
        } catch (e) {
            next(e);
        }
    }

    async getTaskByArrayId(req: Request, res: Response, next: NextFunction) {
        try {
            const { tasksIdString } = req.params;
            const tasksId = tasksIdString.split(' ');
            const task = await tasksService.getTaskByArrayId(tasksId);
            res.status(200).json(task);
        } catch (e) {
            next(e);
        }
    }

    async getTaskByIdForChooseTranslateWords(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const tasks = await tasksService.getTaskByIdForChooseTranslateWords(+id);
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
                translateWordsTasks,
            } = req.body;
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
                translateWordsTasks,
                image,
            );
            res.status(201).json(task);
        } catch (e) {
            next(e);
        }
    }

    async deleteTask(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            await tasksService.deleteTask(+id);
            res.status(200).json('Deleted');
        } catch (e) {
            next(e);
        }
    }
}

export const tasksController = new TasksController();
