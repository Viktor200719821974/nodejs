import { NextFunction, Request, Response } from 'express';

import { tasksService } from '../services/tasksService';

class ExercisesMiddleware {
    async chooseImageTaskLength(req: Request, res: Response, next: NextFunction) {
        const { chooseImage } = req.body;
        if (chooseImage === 'true') {
            const arrayChooseImage = await tasksService.getTasksForChooseImage();
            console.log(arrayChooseImage, '::::::::::::');
            if (arrayChooseImage.length < 3) {
                res.status(400)
                    .json(`Need to add more tasks with chooseAnswer. Now ${arrayChooseImage.length} and need min 2`);
                return;
            }
            next();
        } else {
            next();
        }
    }
}

export const exercisesMiddleware = new ExercisesMiddleware();
