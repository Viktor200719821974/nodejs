import { NextFunction, Request, Response } from 'express';

import { lessonsService } from '../services/lessonsService';

class LessonsController {
    async getLessons(req: Request, res: Response, next: NextFunction) {
        try {
            const lessons = await lessonsService.getLessons();
            res.status(200).json(lessons);
        } catch (e) {
            next(e);
        }
    }

    async getLessonById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const lesson = await lessonsService.getLessonById(+id);
            res.status(200).json(lesson);
        } catch (e) {
            next(e);
        }
    }

    async createLesson(req: Request, res: Response, next: NextFunction) {
        try {
            const { lessonNumber } = req.body;
            const lesson = await lessonsService.createLesson(+lessonNumber);
            res.status(201).json(lesson);
        } catch (e) {
            next(e);
        }
    }

    async createTaskExercise(req: Request, res: Response, next: NextFunction) {
        try {
            const { exerciseId } = req.params;
            const task = await lessonsService.createTaskExercise(req.body, +exerciseId);
            res.status(201).json(task);
        } catch (e) {
            next(e);
        }
    }
}

export const lessonsController = new LessonsController();