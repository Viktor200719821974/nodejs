import { NextFunction, Request, Response } from 'express';
// import { model } from '../models';

import { lessonsService } from '../services/lessonsService';

class LessonsMiddleware {
    async findLessonByNumberByThemeId(req: Request, res: Response, next: NextFunction) {
        try {
            const { lessonNumber, themeId } = req.body;
            const existNumber = await lessonsService.findLessonByNumberByThemeId(+lessonNumber, +themeId);
            if (existNumber) {
                res.status(400).json(`Lesson with that number: ${lessonNumber} and that theme already exist`);
                return;
            }
            next();
        } catch (e) {
            next(e);
        }
    }

    // async maxLengthArrayTask(req: Request, res: Response, next: NextFunction) {
    //     try {
    // const data = req.params;
    // const exerciseId = Number(data.exerciseId);
    // const exercise = await model.Exercise.findOne({ where: { id: exerciseId } });
    // const choosePositiveAnswer = exercise?.choosePositiveAnswer;
    // const chooseAnswer = exercise?.chooseAnswer;
    // const chooseMissingWord = exercise?.chooseMissingWord;
    // const chooseTranslateWords = exercise?.chooseTranslateWords;
    // const chooseImage = exercise?.chooseImage;
    // const task = await model.Task.findAll();
    // if (choosePositiveAnswer) {
    //     if (task.length > 9) {
    //         res.status(400).json('In that exerciese must be max 10 tasks ');
    //         return;
    //     }
    // }
    // if (chooseAnswer || chooseImage) {
    //     if (task.length > 2) {
    //         res.status(400).json('In that exerciese must be max 3 tasks ');
    //         return;
    //     }
    //     }
    //     if (chooseMissingWord) {
    //         if (task.length > 3) {
    //             res.status(400).json('In that exerciese must be max 4 tasks ');
    //             return;
    //         }
    //     }
    //     if (chooseTranslateWords) {
    //         const { answer } = req.body;
    //         if (answer === undefined) {
    //             res.status(400)
    //                 .json('In that exerciese must be to add answer ');
    //             return;
    //         }
    //         if (task.length > 4) {
    //             res.status(400)
    //                 .json('In that exerciese must be max 5 tasks ');
    //             return;
    //         }
    //     }
    //     next();
    // } catch (e) {
    //     next(e);
    // }
    // }
}

export const lessonsMiddleware = new LessonsMiddleware();
