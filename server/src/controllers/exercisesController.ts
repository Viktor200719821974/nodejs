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

    async getExercisesLesson(req: Request, res: Response, next: NextFunction) {
        try {
            const { lessonNumber } = req.params;
            const exercises = await exercisesService.getExercisesLesson(+lessonNumber);
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
}

export const exercisesController = new ExercisesController();
