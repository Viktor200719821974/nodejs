import { model } from '../models';

class QuestionsService {
    async createQuestion(
        question: [],
        exerciseId: number,
        choosePositiveAnswer: boolean,
        chooseMissingWord: boolean,
        chooseAnswer: boolean,
        chooseImage: boolean,
    ): Promise<void> {
        const word = question.map((c: string) => c)[0];
        if (choosePositiveAnswer) {
            const arr = word.split(' ');
            arr.forEach((item) => {
                // @ts-ignore
                model.Question.create({ word: item, exerciseId });
            });
        }
        if (chooseMissingWord || chooseAnswer || chooseImage) {
            // @ts-ignore
            await model.Question.create({ word, exerciseId });
        }
        // if (chooseTranslateWords) {
        //     question.forEach((item: string) => {
        //         // @ts-ignore
        //         model.Question.create({ word: item, exerciseId });
        //     });
        // }
    }
}

export const questionsService = new QuestionsService();
