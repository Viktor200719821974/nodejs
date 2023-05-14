import { NextFunction, Request, Response } from 'express';

import { lessonsService } from '../services/lessonsService';

class LessonsMiddleware {
    async findLessonByNumberByThemeId(req: Request, res: Response, next: NextFunction) {
        try {
            const { lessonNumber, themeId, moduleId } = req.body;
            if (moduleId === 0) {
                res.status(400).json('Choose number of module');
            }
            const existNumber = await lessonsService.findLessonByNumberByThemeId(+lessonNumber, +themeId, +moduleId);
            if (existNumber) {
                res.status(400)
                    .json(`Lesson with that number: ${lessonNumber} with that theme and that number module already exist`);
                return;
            }
            next();
        } catch (e) {
            next(e);
        }
    }
}

export const lessonsMiddleware = new LessonsMiddleware();
