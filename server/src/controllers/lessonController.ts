import { NextFunction, Request, Response } from 'express';

import { lessonService } from '../services/lessonService';

class LessonController {
    async getLessons(req: Request, res: Response, next: NextFunction) {
        try {
            const lessons = await lessonService.getLessons();
            res.status(200).json(lessons);
        } catch (e) {
            next(e);
        }
    }

    async createLesson (req: Request, res: Response, next: NextFunction) {
        try {
            const { lessonNumber } = req.body;
            const lesson = await lessonService.createLesson(+lessonNumber);
            res.status(201).json(lesson);
        } catch (e) {
            next(e);
        }
    }
    
    async createExercise(req: Request, res: Response, next: NextFunction) {
        try {
            const { lessonNumber } = req.params;
            const exercise = await lessonService.createExercise(req.body, +lessonNumber);
            res.status(201).json(exercise);
        } catch (e) {
            next(e);
        }
    }

    async createTaskExercise(req: Request, res: Response, next: NextFunction) {
        try {
            const { exerciseId } = req.params;
            const task = await lessonService.createTaskExercise(req.body, +exerciseId);
            res.status(201).json(task);
        } catch (e) {
            next(e);
        }
    }
}

export const lessonController = new LessonController();