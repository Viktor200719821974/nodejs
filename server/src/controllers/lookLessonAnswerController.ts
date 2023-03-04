import { NextFunction, Response } from 'express';

import { IRequestExtended } from '../interfaces';

class LookLessonAnswerController {
    async getLookLessonAnswer(req: IRequestExtended, res: Response, next: NextFunction) {

    }

    async createLookLessonAnswer(req: IRequestExtended, res: Response, next: NextFunction) {
        
    }
}

export const lookLessonAnswerController = new LookLessonAnswerController();