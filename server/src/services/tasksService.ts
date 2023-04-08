import { UploadedFile } from 'express-fileupload';
import path from 'path';

import { model } from '../models';
import { ITask } from '../interfaces';

class TasksService {
    async getTasks(): Promise<ITask[]> {
        return model.Task.findAll();
    }

    async getTasksForTheme(title: string): Promise<ITask[]> {
        const themeId = await model.Theme.findOne({ where: { title } }).then((data) => data?.id);
        return model.Task.findAll({ where: { themeId } });
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
            chooseMissingWord, chooseImage, answer, word,
        } = task;
        if (chooseImage) {
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
        if (chooseMissingWord) {
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
        return model.Task.create({ ...task });
    }
}

export const tasksService = new TasksService();
