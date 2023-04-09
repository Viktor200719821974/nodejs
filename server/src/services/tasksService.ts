import { UploadedFile } from 'express-fileupload';

import { model } from '../models';
import { ITask } from '../interfaces';
import { chooseTypeTasksService } from './chooseTypeTasksService';

class TasksService {
    async getTasks(): Promise<ITask[]> {
        return model.Task.findAll();
    }

    async getTasksForThemeAndChooseAnswer(themeId: number, chooseAnswer: boolean)
        : Promise<ITask[]> {
        return model.Task.findAll({
            where: {
                themeId,
                chooseAnswer,
            },
        });
    }

    async getTasksForTheme(themeId: number): Promise<ITask[]> {
        return model.Task.findAll({
            where: {
                themeId,
            },
        });
    }

    // async createTask(
    //     answer: [],
    //     exerciseId: number,
    //     cyrillicPattern: RegExp,
    //     oneWord: string,
    //     question: [],
    //     choosePositiveAnswer: boolean,
    // ) {
    //     const arr = answer.map((c: string) => c)[0].split(' ');
    //     if (choosePositiveAnswer) {
    //         // eslint-disable-next-line no-plusplus
    //         arr.forEach((item) => {
    //             // @ts-ignore
    //             // model.Task.create({ name: item, exerciseId });
    //         });
    //     }
    //     const taskArray = await model.Task.findAll();
    //     // const filter = taskArray.filter(c => arr.forEach(element => c.name !== element));
    //     // const random = Math.floor(Math.random() * filter.length);
    //     // console.log(filter);
    //     // console.log(random, filter[random]);
    //     const filterArray = [];
    //     // eslint-disable-next-line no-plusplus
    //     for (let i = 0; i < taskArray.length; i++) {
    //         // eslint-disable-next-line no-plusplus
    //         for (let j = 0; j < arr.length; j++) {
    //             if (taskArray.map((c) => c.name)[i] !== arr[j]) {
    //                 if (cyrillicPattern.test(taskArray.map((c) => c.name)[i])
    //                     && cyrillicPattern.test(oneWord)) {
    //                     filterArray.push(taskArray.map((c) => c.name)[i]);
    //                 }
    //             }
    //         }
    //     }
    //     let arrayWordsDefault = [];
    //     if (cyrillicPattern.test(oneWord)) {
    //         arrayWordsDefault = ['результат', 'він', 'яблуко'];
    //     } else {
    //         arrayWordsDefault = ['result', 'he', 'apple'];
    //     }
    //     if (filterArray.length === 0) {
    //         // eslint-disable-next-line no-plusplus
    //         for (let i = 0; i < arrayWordsDefault.length; i++) {
    //             // const name = arrayWordsDefault[i];
    //             // @ts-ignore
    //             // eslint-disable-next-line no-await-in-loop
    //             // await model.Task.create({ name, exerciseId });
    //         }
    //     } else {
    //         // let newArray = [];
    //         // if (exerciseId % 2 === 0) {
    //         //     newArray = filter.filter(c => c.id % 2 === 0);
    //         // } else {
    //         //     newArray = filter.filter(c => c.id % 2 !== 0);
    //         // }
    //         // console.log(newArray);
    //     }
    // }
    async createTask(task: ITask, image: UploadedFile) : Promise<ITask> {
        const {
            chooseMissingWord, chooseImage, choosePositiveAnswer, answer, word, chooseAnswer,
            themeId,
        } = task;
        if (chooseImage) {
            return chooseTypeTasksService.chooseImage(answer, image, task);
        }
        if (chooseMissingWord) {
            return chooseTypeTasksService.chooseMissingWord(answer, word, task);
        }
        if (choosePositiveAnswer) {
            return chooseTypeTasksService
                .choosePositiveAnswer(answer, task, chooseAnswer, +themeId);
        }
        return model.Task.create({ ...task });
    }
}

export const tasksService = new TasksService();
