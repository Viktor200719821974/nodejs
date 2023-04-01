import { NextFunction, Request, Response } from 'express';

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
            const { title } = req.params;
            const tasks = await tasksService.getTasksForTheme(title);
            res.status(200).json(tasks);
        } catch (e) {
            next(e);
        }
    }

    async createTask(req: Request, res: Response, next: NextFunction) {
        try {
            const task = await tasksService.createTask(req.body);
            res.status(201).json(task);
        } catch (e) {
            next(e);
        }
    }
}

export const tasksController = new TasksController();
