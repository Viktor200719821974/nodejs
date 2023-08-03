import { NextFunction, Response } from 'express';
import { IRequestExtended } from '../interfaces';
import { lookLessonAnswersService } from '../services/lookLessonAnswersService';

class LookLesssonAnswersComponent {
    async createLookLessonAnswer(req: IRequestExtended, res: Response, next: NextFunction) {
        try {
            //@ts-ignore
            const { id } = req.user
            const lessonAnswer = await lookLessonAnswersService.createLookLessonAnswer(+id, req.body);
            res.status(201).json(lessonAnswer);
        } catch(e) {
            next(e);
        }
    }

    async getLookLessonAnswersByLessonId(req: IRequestExtended, res: Response, next: NextFunction) {
        try {
            //@ts-ignore
            const { id } = req.user;
            const { lessonId } = req.params;
            const lessonAnswers = await lookLessonAnswersService.getLookLessonAnswersByLessonId(+lessonId, +id);
            res.status(200).json(lessonAnswers);
        } catch(e) {
            next(e);
        }
    }
}

export const lookLessonAnswersController = new LookLesssonAnswersComponent();