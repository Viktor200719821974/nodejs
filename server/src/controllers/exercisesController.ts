import { Request, Response, NextFunction } from 'express';

import { exercisesService } from '../services/exercisesService';

class ExercisesController {
    async getExercises(req: Request, res: Response, next: NextFunction) {
        try {
            const exercises = await exercisesService.getExercises();
            res.status(200).json(exercises);
        } catch (e) {
            next(e);
        }
    }

    async getExercisesForLesson(req: Request, res: Response, next: NextFunction) {
        try {
            const { lessonId } = req.params;
            const exercises = await exercisesService.getExercisesForLesson(+lessonId);
            res.status(200).json(exercises);
        } catch (e) {
            next(e);
        }
    }

    // async createExercise(req: Request, res: Response, next: NextFunction) {
    //     try {
    //         const { lessonNumber } = req.params;
    //         const {
    //             chooseImage,
    //             choosePositiveAnswer,
    //             chooseAnswer,
    //             chooseMissingWord,
    //             chooseTranslateWords,
    //             answer,
    //             question,
    //             src,
    //             alt,
    //         } = req.body;
    //         const exercise = await exercisesService.createExercise(
    //             chooseImage,
    //             choosePositiveAnswer,
    //             chooseAnswer,
    //             chooseMissingWord,
    //             chooseTranslateWords,
    //             answer,
    //             src,
    //             alt,
    //             question,
    //             +lessonNumber,
    //         );
    //         res.status(201).json(exercise);
    //     } catch (e) {
    //         next(e);
    //     }
    // }
    async createExercise(req: Request, res: Response, next: NextFunction) {
        const { taskId, lessonId } = req.body;
        const exercise = await exercisesService.createExercise(+taskId, +lessonId);
        res.status(201).json(exercise);
    }
}

export const exercisesController = new ExercisesController();
