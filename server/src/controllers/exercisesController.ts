import { Request, Response, NextFunction } from 'express';
import { UploadedFile } from 'express-fileupload';

import { exercisesService } from '../services/exercisesService';
import { tasksService } from '../services/tasksService';

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

    async createExercise(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('.>>>>>>>>>>>>>>>>>');
            const { taskId, lessonId } = req.body;
            const image = req.files?.image as UploadedFile;
            const task = await tasksService.getTaskById(+taskId);
            console.log('/????????????????????????');
            const choosePositiveAnswer = task?.choosePositiveAnswer;
            if (choosePositiveAnswer === true && image === undefined) {
                res.status(400).json('No image');
                return;
            }
            const exercise = await exercisesService.createExercise(+taskId, +lessonId, image);
            res.status(201).json(exercise);
        } catch (e) {
            next(e);
        }
    }
}

export const exercisesController = new ExercisesController();
