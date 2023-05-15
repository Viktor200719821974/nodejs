import { UploadedFile } from 'express-fileupload';
import { IExercise } from '../interfaces';
import { model } from '../models';
import { saveImageService } from './saveImageService';

class ExercisesService {
    async getExercises(): Promise<IExercise[]> {
        return model.Exercise.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
        });
    }

    async getExercisesForLesson(lessonId: number): Promise<IExercise[]> {
        return model.Exercise.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
            where: { lessonId },
        });
    }

    async createExercise(id: number, lessonId: number, image: UploadedFile) {
        const task = await model.Task.findOne({ where: { id } });
        const chooseAnswer = task?.chooseAnswer ?? false;
        const chooseImage = task?.chooseImage ?? false;
        const choosePositiveAnswer = task?.choosePositiveAnswer ?? false;
        const chooseMissingWord = task?.chooseMissingWord ?? false;
        const chooseTranslateWords = task?.chooseTranslateWords ?? false;
        const question = task?.question ?? '';
        const answer = task?.answer ?? '';
        let tasks = [];
        tasks.push(id);
        let titleExercise = '';
        let oneWord = '';
        const cyrillicPattern = /^[\u0400-\u04FF]+$/;
        console.log('.............................................');
        if (answer !== undefined) {
            oneWord = answer.split(' ').map((c) => c)[0];
        }
        if (chooseAnswer) {
            console.log(chooseAnswer, '________________');
            titleExercise = 'Як сказати';
        }
        if (chooseImage) {
            titleExercise = 'Виберіть зображення для слова';
            let tasksId = (await model.Task.findAll({ where: { chooseImage: true } }))
                .map((data) => data.id)
                .filter((c) => c !== id);
            tasksId = await this._getShuffledArray(tasksId);
            tasksId.length = 2;
            tasks = tasks.concat(tasksId);
            tasks = await this._getShuffledArray(tasks);
        }
        if (choosePositiveAnswer) {
            if (cyrillicPattern.test(oneWord)) {
                titleExercise = 'Напишіть українською';
            } else {
                titleExercise = 'Напишіть англійською';
            }
        }
        if (chooseMissingWord) {
            titleExercise = 'Виберіть пропущене слово';
        }
        if (chooseTranslateWords) {
            titleExercise = 'Об’єднайте в пари:';
        }
        const exerciseId = await model.Exercise
            // @ts-ignore
            .create({
                question,
                answer,
                titleExercise,
                tasks,
                lessonId,
                chooseAnswer,
                chooseImage,
                chooseMissingWord,
                choosePositiveAnswer,
                chooseTranslateWords,
            }).then((data) => data.id);
        if (choosePositiveAnswer) {
            const fileName = await saveImageService.saveImage(image);
            // @ts-ignore
            await model.ImageExercise.create({ src: fileName, alt: `${answer} image`, exerciseId });
        }
        return model.Exercise.findOne({
            where: { id: exerciseId },
            include: [
                { model: model.ImageExercise, as: 'image' },
            ],
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
        });
    }

    private async _getShuffledArray(array: number[]): Promise<number[]> {
        const newArr = array.slice();
        // eslint-disable-next-line no-plusplus
        for (let i = newArr.length - 1; i > 0; i--) {
            const rand = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
        }
        return newArr;
    }
}

export const exercisesService = new ExercisesService();
