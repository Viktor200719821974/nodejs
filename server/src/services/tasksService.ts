import { UploadedFile } from 'express-fileupload';
import fs from 'fs';
import path from 'path';

import { model } from '../models';
import { IPaginationResponse, ITask } from '../interfaces';
import { chooseTypeTasksService } from './chooseTypeTasksService';
import { filterTasksService } from './filterTasksService';

class TasksService {
    async getTasks(
        themeId: string,
        chooseImage: boolean,
        chooseAnswer: boolean,
        choosePositiveAnswer: boolean,
        chooseMissingWord: boolean,
        chooseTranslateWords: boolean,
        question: string,
        word: string,
        answer: string,
        lessonId: string,
        taskId: string,
        offset: number,
        page: number,
        limit: number,
        createWhat: string,
    ): Promise<IPaginationResponse<ITask>> {
        return filterTasksService.filterTasks(
            themeId,
            chooseImage,
            chooseAnswer,
            choosePositiveAnswer,
            chooseMissingWord,
            chooseTranslateWords,
            question,
            word,
            answer,
            lessonId,
            taskId,
            offset,
            page,
            limit,
            createWhat,
        );
    }

    async getAllTasks(): Promise<ITask[]> {
        return model.Task.findAll({
            include: [
                { model: model.ImageTask, as: 'image' },
            ],
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
        });
    }

    async getTaskById(id: number): Promise<ITask | null> {
        return model.Task.findOne({ where: { id } });
    }

    async getTasksForChooseAnswer()
        : Promise<ITask[]> {
        return model.Task.findAll({
            where: {
                chooseAnswer: true,
            },
        });
    }

    async getTasksForChooseImage()
        : Promise<ITask[]> {
        return model.Task.findAll({
            where: {
                chooseImage: true,
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

    async createTask(
        chooseImage: boolean,
        chooseAnswer: boolean,
        chooseMissingWord: boolean,
        choosePositiveAnswer: boolean,
        chooseTranslateWords: boolean,
        themeId: number,
        word: string,
        answer: string,
        question: string,
        translate: string,
        translateWordsTasks: string,
        image: UploadedFile,
    ) : Promise<ITask | undefined> {
        const task = {
            chooseImage,
            chooseAnswer,
            chooseMissingWord,
            choosePositiveAnswer,
            chooseTranslateWords,
            themeId,
            word,
            answer,
            question,
            translate,
        } as unknown as ITask;
        let newTask;
        if (chooseMissingWord) {
            newTask = await chooseTypeTasksService.chooseMissingWord(answer, word, task, translate);
        }
        if (chooseImage) {
            newTask = await chooseTypeTasksService.chooseImage(answer, image, task);
        }
        if (choosePositiveAnswer || chooseAnswer) {
            newTask = await chooseTypeTasksService
                .choosePositiveAnswerAndChooseAnswer(answer, task);
        }
        if (chooseTranslateWords) {
            newTask = await chooseTypeTasksService.chooseTranslateWords(translateWordsTasks, task);
        }
        return newTask;
    }

    async deleteTask(id: number): Promise<void> {
        const chooseImage = await model.Task.findOne({ where: { id } })
            .then((data) => data?.chooseImage);
        if (chooseImage) {
            const fileName = await model.ImageTask.findOne({ where: { taskId: id } })
                .then((data) => data?.src);
            const pathToFile = path.join(__dirname, `../static/${fileName}`);
            if (fs.existsSync(pathToFile)) {
                fs.unlinkSync(pathToFile);
            }
            await model.ImageTask.destroy({ where: { taskId: id } });
        }
        await model.Task.destroy({ where: { id } });
    }
}

export const tasksService = new TasksService();
