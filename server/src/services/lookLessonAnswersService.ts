import { ILookLessonAnswer } from '../interfaces';
import { model } from '../models';

class LookLessonAnswersService {
    async createLookLessonAnswer(userId: number, lessonAnswers: ILookLessonAnswer): Promise<ILookLessonAnswer> {
        return model.LookLessonAnswer.create({ ...lessonAnswers, userId });
    }

    async getLookLessonAnswersByLessonId(lessonId: number, userId: number): Promise<ILookLessonAnswer[]> {
        return model.LookLessonAnswer.findAll({ where: { lessonId, userId } });
    }
}

export const lookLessonAnswersService = new LookLessonAnswersService();