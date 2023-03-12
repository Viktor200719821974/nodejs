import { model } from '../models';

class QuestionsService {
    async createQuestion(question: [], exerciseId: number): Promise<void> {
        for (let i = 0; i < question.length; i++) {
            const word = question[i]['word'];
            //@ts-ignore
            await model.Question.create({ word, exerciseId })
        }
    }
}

export const questionsService = new QuestionsService();