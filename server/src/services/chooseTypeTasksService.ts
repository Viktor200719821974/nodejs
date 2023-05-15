import { UploadedFile } from 'express-fileupload';
import { Op } from 'sequelize';

import { model } from '../models';
import { ITask } from '../interfaces';
import { saveImageService } from './saveImageService';

class ChooseTypeTasksService {
    async chooseImage(answer: string, image: UploadedFile, task: ITask): Promise<ITask> {
        const newTask = await model.Task.create({ ...task });
        const taskId = newTask.id;
        const fileName = await saveImageService.saveImage(image);
        // @ts-ignore
        await model.ImageTask.create({ src: fileName, alt: `${answer} image`, taskId });
        return newTask;
    }

    async chooseMissingWord(
        answer: string,
        word: string,
        task: ITask,
        translate: string,
    ): Promise<ITask> {
        const createQuestion = answer.split(' ');
        const wordLength = word.length;
        const arr = [];
        for (let i = 0; i < createQuestion.length; i += 1) {
            if (createQuestion[i] === word) {
                createQuestion[i] = '_'.repeat(wordLength + 2);
            }
            arr.push(createQuestion[i]);
        }
        const joinArray = arr.join(' ');
        const arrayChooseMissingWord = await model.Task
            .findAll({ where: { chooseMissingWord: true } });
        let arrayWords = arrayChooseMissingWord.map((c) => c.word).filter((item) => item !== word);
        if (arrayWords.length < 3) {
            arrayWords.push('are', 'is', 'beer', 'drink', 'am');
            arrayWords = arrayWords.filter((item) => item !== word);
        }
        let unique = arrayWords.filter((value, index, array) => array.indexOf(value) === index);
        unique = await this._getShuffledArray(unique);
        unique.length = 3;
        unique.push(word);
        unique = await this._getShuffledArray(unique);
        // @ts-ignore
        return model.Task.create({
            ...task, question: joinArray, optionsAnswer: unique, translate,
        });
    }

    async choosePositiveAnswerAndChooseAnswer(answer: string, task: ITask)
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
            arrayEnglishWords.push('beer', 'drink', 'apple', 'boy', 'girl', 'mouse');
            arrayUkraineWords.push('батько', 'пити', 'яблуко', 'хлопчик', 'дівчинка', 'олівець');
        }
        for (let i = 0; i < arrayOptionsWords.length; i++) {
            if (cyrillicPattern.test(arrayOptionsWords[i])) {
                arrayUkraineWords.push(arrayOptionsWords[i]);
            } else {
                arrayEnglishWords.push(arrayOptionsWords[i]);
            }
        }
        if (cyrillicPattern.test(optionsAnswer.map((c) => c)[0])) {
            optionsAnswer.forEach((item) => {
                arrayUkraineWords = arrayUkraineWords
                    .filter((c) => c !== item);
            });
            arrayUkraineWords = await this._getShuffledArray(arrayUkraineWords);
            if (task.choosePositiveAnswer) {
                if (optionsAnswer.length > 3) {
                    arrayUkraineWords.length = 3;
                } else {
                    arrayUkraineWords.length = 5;
                }
            } 
            if (task.chooseAnswer === true) {
                arrayUkraineWords.length = 2;
            }
            optionsAnswer = arrayUkraineWords.concat(optionsAnswer);
            optionsAnswer = await this._getShuffledArray(optionsAnswer);
        } else {
            optionsAnswer.forEach((item) => {
                arrayEnglishWords = arrayEnglishWords.filter((c) => c !== item);
            });
            arrayEnglishWords = await this._getShuffledArray(arrayEnglishWords);
            if (task.choosePositiveAnswer === true) {
                if (optionsAnswer.length > 3) {
                    arrayEnglishWords.length = 3;
                } else {
                    arrayEnglishWords.length = 5;
                }
            } 
            if (task.chooseAnswer) {
                arrayEnglishWords.length = 2;
            }
            optionsAnswer = arrayEnglishWords.concat(optionsAnswer);
            optionsAnswer = await this._getShuffledArray(optionsAnswer);
        }
        // @ts-ignore
        return model.Task.create({ ...task, optionsAnswer });
    }

    async chooseTranslateWords(translateWords: string, task: ITask): Promise<ITask> {
        const arr = translateWords.split(',');
        const translateWordsTasks = arr.map((str) => Number(str));
        const tasks = await model.Task.findAll({
            where: {
                id: {
                    [Op.or]: translateWordsTasks,
                },
            },
        });
        let translateWordsAnswers = tasks.map((c) => c.answer);
        translateWordsAnswers = await this._getShuffledArray(translateWordsAnswers);
        return model.Task.create({ ...task, translateWordsTasks, translateWordsAnswers });
    }

    private async _getShuffledArray(array: string[]): Promise<string[]> {
        const newArr = array.slice();
        for (let i = newArr.length - 1; i > 0; i -= 1) {
            const rand = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
        }
        return newArr;
    }
}

export const chooseTypeTasksService = new ChooseTypeTasksService();
