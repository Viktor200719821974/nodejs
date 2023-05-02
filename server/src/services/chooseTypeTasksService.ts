import { UploadedFile } from 'express-fileupload';

import { model } from '../models';
import { ITask } from '../interfaces';
import { saveImageService } from './saveImageService';

class ChooseTypeTasksService {
    async chooseImage(answer: string, image: UploadedFile, task: ITask): Promise<ITask | null> {
        const newTask = await model.Task.create({ ...task });
        const taskId = newTask.id;
        const fileName = await saveImageService.saveImage(image, answer);
        // @ts-ignore
        await model.ImageTask.create({ src: fileName, alt: `${answer} image`, taskId });
        return model.Task.findOne({ 
            include: [
                {model: model.ImageTask, as: 'image'},
            ],
            where: { id: taskId },
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
        });
    }

    async chooseMissingWord(answer: string, word: string, task: ITask): Promise<ITask> {
        const createQuestion = answer.split(' ');
        const wordLength = word.length;
        const arr = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < createQuestion.length; i++) {
            if (createQuestion[i] === word) {
                createQuestion[i] = '_'.repeat(wordLength + 2);
            }
            arr.push(createQuestion[i]);
        }
        const joinArray = arr.join(' ');
        const arrayChooseMissingWord = await model.Task.findAll({ where: { chooseMissingWord: true }});
        let arrayWords = arrayChooseMissingWord.map((c) => c.word).filter(item => item !== word);
        if (arrayWords.length < 3) {
            arrayWords.push('are', 'is', 'beer', 'drink', 'am');
            arrayWords.filter(item => item !== word);
        }
        let unique = arrayWords.filter((value, index, array) => array.indexOf(value) === index);
        unique = await this._getShuffledArray(unique);
        unique.length = 3;
        unique.push(word);
        unique = await this._getShuffledArray(unique);
        //@ts-ignore
        return model.Task.create({ ...task, question: joinArray, optionsAnswer: unique });
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
        if (arrayOptionsWords.length < 3) {
            arrayEnglishWords.push('beer', 'drink', 'apple', 'boy', 'girl');
            arrayUkraineWords.push('батько', 'пити', 'яблуко', 'хлопчик', 'дівчинка');
        }
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
            arrayUkraineWords = arrayUkraineWords.filter((value, index, array) => array.indexOf(value) === index);
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
            arrayEnglishWords = arrayEnglishWords.filter((value, index, array) => array.indexOf(value) === index);
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
