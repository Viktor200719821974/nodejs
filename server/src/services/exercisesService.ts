import { IExercise } from '../interfaces';
import { model } from '../models';
import { questionsService } from './questionsService';
import { tasksService } from './tasksService';

class ExercisesService {
    async getExercises(): Promise<IExercise[]> {
        return model.Exercise.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
        });
    }

    async getExercisesLesson(lessonNumber: number): Promise<IExercise[]> {
        const lessonId = await model.Lesson.findOne({ where: { lessonNumber } })
            .then((data) => data?.id);
        return model.Exercise.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
            where: { lessonId },
        });
    }

    async createExercise(
        chooseImage: boolean,
        choosePositiveAnswer: boolean,
        chooseAnswer: boolean,
        chooseMissingWord: boolean,
        chooseTranslateWords: boolean,
        answer: [],
        src: string,
        alt: string,
        question: [],
        lessonNumber: number,
    ): Promise<IExercise> {
        const cyrillicPattern = /^[\u0400-\u04FF]+$/;
        let arrayValue = answer.map((c:string) => c)[0];
        if (chooseTranslateWords) {
            arrayValue = '';
        }
        const oneWord = answer.map((c:string) => c)[0].split(' ').map((c) => c)[0];
        let titleTask = '';
        if (chooseImage) {
            titleTask = 'Виберіть зображення для слова';
        }
        if (choosePositiveAnswer) {
            if (cyrillicPattern.test(oneWord)) {
                titleTask = 'Напишіть українською';
            } else {
                titleTask = 'Напишіть англійською';
            }
        }
        if (chooseAnswer) {
            titleTask = 'Як сказати';
        }
        if (chooseMissingWord) {
            titleTask = 'Виберіть пропущене слово';
        }
        if (chooseTranslateWords) {
            titleTask = 'Об’єднайте в пари:';
        }
        const lessonId = await model.Lesson.findOne({ where: { lessonNumber } })
            .then((data) => data?.id);
        const exercise = await model.Exercise.create({
            titleTask,
            chooseImage,
            choosePositiveAnswer,
            chooseAnswer,
            chooseMissingWord,
            chooseTranslateWords,
            answer: arrayValue,
            src,
            alt,
            // @ts-ignore
            lessonId,
        });
        const exerciseId = exercise.id;
        if (!chooseTranslateWords) {
            await questionsService.createQuestion(
                question,
                exerciseId,
                choosePositiveAnswer,
                chooseMissingWord,
                chooseAnswer,
                chooseImage,
            );
        }
        await tasksService.createTask(
            answer,
            exerciseId,
            cyrillicPattern,
            oneWord,
            question,
            choosePositiveAnswer,
        );
        return exercise;
    }
}

export const exercisesService = new ExercisesService();
