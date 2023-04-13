import path from 'path';
import { UploadedFile } from 'express-fileupload';

import { model } from '../models';
import { ITask } from '../interfaces';

class ChooseTypeTasksService {
    async chooseImage(answer: string, image: UploadedFile, task: ITask): Promise<ITask> {
        const newTask = await model.Task.create({ ...task });
        const taskId = newTask.id;
        const fileExtension = path.extname(image.name);
        const fileName = `${answer}Image${fileExtension}`;
        const uploadPath = path.join(__dirname, `../static/${fileName}`);
        image.mv(uploadPath, (err) => {
            if (err) {
                // eslint-disable-next-line no-console
                console.log(err);
            }
        });
        // @ts-ignore
        await model.ImageTask.create({ src: fileName, alt: `${answer} image`, taskId });
        return newTask;
    }

    async chooseMissingWord(answer: string, word: string, task: ITask): Promise<ITask> {
        const createQuestion = answer.split(' ');
        const arr = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < createQuestion.length; i++) {
            if (createQuestion[i] === word) {
                createQuestion[i] = '____';
            }
            arr.push(createQuestion[i]);
        }
        const joinArray = arr.join(' ');
        return model.Task.create({ ...task, question: joinArray });
    }

    async choosePositiveAnswer(answer: string, task: ITask)
        : Promise<ITask> {
        const cyrillicPattern = /^[\u0400-\u04FF]+$/;
        let optionsAnswer = answer.split(' ');
        const arrayTasks = await model.Task
            .findAll({
                where: {
                    chooseAnswer: true,
                },
            });
        const arrayOptionsWords = arrayTasks.map((data) => data.answer);
        let arrayEnglishWords: string[] = [];
        let arrayUkraineWords: string[] = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < arrayOptionsWords.length; i++) {
            if (cyrillicPattern.test(arrayOptionsWords[i])) {
                arrayUkraineWords.push(arrayOptionsWords[i]);
            } else {
                arrayEnglishWords.push(arrayOptionsWords[i]);
            }
        }
        if (cyrillicPattern.test(optionsAnswer.map((c) => c)[0])) {
            optionsAnswer.forEach((item) => {
                arrayUkraineWords.filter((c) => c !== item);
            });
            arrayUkraineWords = await this._getShuffledArray(arrayUkraineWords);
            if (optionsAnswer.length > 3) {
                arrayUkraineWords.length = 3;
            } else {
                arrayUkraineWords.length = 5;
            }
            optionsAnswer = arrayUkraineWords.concat(optionsAnswer);
            optionsAnswer = await this._getShuffledArray(optionsAnswer);
        } else {
            optionsAnswer.forEach((item) => {
                arrayEnglishWords.filter((c) => c !== item);
            });
            arrayEnglishWords = await this._getShuffledArray(arrayEnglishWords);
            if (optionsAnswer.length > 3) {
                arrayEnglishWords.length = 3;
            } else {
                arrayEnglishWords.length = 5;
            }
            optionsAnswer = arrayEnglishWords.concat(optionsAnswer);
            optionsAnswer = await this._getShuffledArray(optionsAnswer);
        }
        // @ts-ignore
        return model.Task.create({ ...task, optionsAnswer });
    }

    private async _getShuffledArray(array: string[]): Promise<string[]> {
        const newArr = array.slice();
        // eslint-disable-next-line no-plusplus
        for (let i = newArr.length - 1; i > 0; i--) {
            const rand = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
        }
        return newArr;
    }
}

export const chooseTypeTasksService = new ChooseTypeTasksService();
