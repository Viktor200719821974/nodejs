import { NextFunction, Response } from 'express';

import { IRequestExtended } from '../interfaces';

class LookLessonAnswerController {
    async getLookLessonAnswer(req: IRequestExtended, res: Response, next: NextFunction) {
        // eslint-disable-next-line no-console
        console.log(req, res, next);
    }

    async createLookLessonAnswer(req: IRequestExtended, res: Response, next: NextFunction) {
        // eslint-disable-next-line no-console
        console.log(req, res, next);
    }
}

export const lookLessonAnswerController = new LookLessonAnswerController();
