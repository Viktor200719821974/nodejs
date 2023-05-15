import { Op } from 'sequelize';

import { model } from '../models';
import { IPaginationResponse, ITask } from '../interfaces';

class FilterTasksService {
    async filterTasks(
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
        let tasks;
        let id;
        if (themeId !== '0') {
            id = +themeId;
        }
        if (themeId !== '0' && themeId !== undefined) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: { themeId: id },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (themeId === '0' || themeId === undefined) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (themeId !== '0' && chooseImage) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: { themeId: id, chooseImage },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (themeId !== '0' && chooseAnswer) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: { themeId: id, chooseAnswer },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (themeId !== '0' && choosePositiveAnswer) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: { themeId: id, choosePositiveAnswer },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (themeId !== '0' && chooseMissingWord) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: { themeId: id, chooseMissingWord },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (themeId !== '0' && chooseTranslateWords && createWhat === 'task') {
            tasks = await model.Task.findAll({
                where: { chooseAnswer: true, themeId },
            });
            const arrayAnswer = tasks.map((c) => c.answer);
            const cyrillicPattern = /^[\u0400-\u04FF]+$/;
            const arrayAnswerEnglish: string[] = [];
            for (let i = 0; i < arrayAnswer.length; i += 1) {
                if (!cyrillicPattern.test(arrayAnswer[i])) {
                    arrayAnswerEnglish.push(arrayAnswer[i]);
                }
            }
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                where: {
                    answer: {
                        [Op.or]: arrayAnswerEnglish,
                    },
                    themeId,
                    chooseAnswer: true,
                },
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (themeId !== '0' && chooseTranslateWords && createWhat === 'exercise') {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                where: {
                    chooseTranslateWords: true,
                    themeId,
                },
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (themeId === '0' && chooseImage) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: { chooseImage },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (themeId === '0' && chooseAnswer) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: { chooseAnswer },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (themeId === '0' && choosePositiveAnswer) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: { choosePositiveAnswer },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (themeId === '0' && chooseMissingWord) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: { chooseMissingWord },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (themeId === '0' && chooseTranslateWords && createWhat === 'task') {
            tasks = await model.Task.findAll({
                where: { chooseAnswer: true, themeId },
            });
            const arrayAnswer = tasks.map((c) => c.answer);
            const cyrillicPattern = /^[\u0400-\u04FF]+$/;
            const arrayAnswerEnglish: string[] = [];
            for (let i = 0; i < arrayAnswer.length; i += 1) {
                if (!cyrillicPattern.test(arrayAnswer[i])) {
                    arrayAnswerEnglish.push(arrayAnswer[i]);
                }
            }
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                where: {
                    answer: {
                        [Op.or]: arrayAnswerEnglish,
                    },
                    chooseAnswer: true,
                },
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (themeId === '0' && chooseTranslateWords && createWhat === 'exercise') {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                where: {
                    chooseTranslateWords: true,
                },
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (question) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (question && themeId !== '0' && chooseImage) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    themeId: id,
                    chooseImage,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (question && themeId !== '0' && chooseAnswer) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    themeId: id,
                    chooseAnswer,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (question && themeId !== '0' && choosePositiveAnswer) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    themeId: id,
                    choosePositiveAnswer,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (question && themeId !== '0' && chooseMissingWord) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    themeId: id,
                    chooseMissingWord,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (question && themeId === '0' && chooseImage) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    chooseImage,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (question && themeId === '0' && chooseAnswer) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    chooseAnswer,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (question && themeId === '0' && choosePositiveAnswer) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    choosePositiveAnswer,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (question && themeId === '0' && chooseMissingWord) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    chooseMissingWord,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (word) {
            tasks = model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    word: {
                        [Op.like]: `%${word}%`,
                    },
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (word && themeId !== '0' && chooseMissingWord) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    word: {
                        [Op.like]: `%${word}%`,
                    },
                    themeId: id,
                    chooseMissingWord,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (answer) {
            tasks = model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (answer && themeId !== '0' && chooseImage) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    themeId: id,
                    chooseImage,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (answer && themeId !== '0' && chooseAnswer) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    themeId: id,
                    chooseAnswer,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (answer && themeId !== '0' && choosePositiveAnswer) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    themeId: id,
                    choosePositiveAnswer,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (answer && themeId !== '0' && chooseMissingWord) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    themeId: id,
                    chooseMissingWord,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (answer && themeId === '0' && chooseImage) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    chooseImage,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (answer && themeId === '0' && chooseAnswer) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    chooseAnswer,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (answer && themeId === '0' && choosePositiveAnswer) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    choosePositiveAnswer,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (answer && themeId === '0' && chooseMissingWord) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    chooseMissingWord,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (answer && question && themeId !== '0' && chooseImage) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    themeId: id,
                    chooseImage,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (answer && question && themeId !== '0' && chooseAnswer) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    themeId: id,
                    chooseAnswer,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (answer && question && themeId !== '0' && choosePositiveAnswer) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    themeId: id,
                    choosePositiveAnswer,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (answer && question && themeId !== '0' && chooseMissingWord) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    themeId: id,
                    chooseMissingWord,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (answer && question && themeId === '0' && chooseImage) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    chooseImage,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (answer && question && themeId === '0' && chooseAnswer) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    chooseAnswer,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (answer && question && themeId === '0' && choosePositiveAnswer) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    choosePositiveAnswer,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (answer && question && themeId === '0' && chooseMissingWord) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    chooseMissingWord,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (answer && word && themeId !== '0' && chooseMissingWord) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    word: {
                        [Op.like]: `%${word}%`,
                    },
                    themeId: id,
                    chooseMissingWord,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (answer && word && themeId === '0' && chooseMissingWord) {
            tasks = await model.Task.findAndCountAll({
                offset,
                limit,
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    word: {
                        [Op.like]: `%${word}%`,
                    },
                    chooseMissingWord,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (lessonId !== '0' && themeId !== '0' && lessonId !== undefined) {
            const arrayExercisesLesson = await model.Exercise
                .findAll({ where: { lessonId, chooseImage: false } });
            const arrayExercisesLessonChooseImage = await model.Exercise
                .findAll({ where: { lessonId, chooseImage: true } });
            let arrayId: any = [];
            const arrayTaskId = arrayExercisesLesson.map((c) => c.tasks);
            for (let i = 0; i < arrayTaskId.length; i += 1) {
                arrayId.push(arrayTaskId[i][0]);
            }
            if (arrayExercisesLessonChooseImage.length !== 0) {
                const arrayExerciseQuestion = arrayExercisesLessonChooseImage
                    .map((c) => c.question);
                const arrayExerciseTasksChooseImage = await model.Task.findAll({
                    where: {
                        question: {
                            [Op.or]: arrayExerciseQuestion,
                        },
                    },
                });
                const arrayIdTasksChooseImage = arrayExerciseTasksChooseImage.map((c) => c.id);
                arrayId = arrayId.concat(arrayIdTasksChooseImage);
            }
            if (taskId !== '0' && taskId !== undefined) {
                arrayId = arrayId.concat(Number(taskId));
            }
            if (
                !chooseAnswer && !chooseImage && !chooseMissingWord
                && !choosePositiveAnswer && !chooseTranslateWords
            ) {
                tasks = await model.Task.findAndCountAll({
                    offset,
                    limit,
                    where: {
                        id: {
                            [Op.notIn]: arrayId,
                        },
                        themeId,
                    },
                    include: [
                        { model: model.ImageTask, as: 'image' },
                    ],
                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                    },
                });
            }
            if (chooseAnswer) {
                tasks = await model.Task.findAndCountAll({
                    offset,
                    limit,
                    where: {
                        id: {
                            [Op.notIn]: arrayId,
                        },
                        themeId,
                        chooseAnswer: true,
                    },
                    include: [
                        { model: model.ImageTask, as: 'image' },
                    ],
                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                    },
                });
            }
            if (chooseImage) {
                tasks = await model.Task.findAndCountAll({
                    offset,
                    limit,
                    where: {
                        id: {
                            [Op.notIn]: arrayId,
                        },
                        themeId,
                        chooseImage: true,
                    },
                    include: [
                        { model: model.ImageTask, as: 'image' },
                    ],
                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                    },
                });
            }
            if (choosePositiveAnswer) {
                tasks = await model.Task.findAndCountAll({
                    offset,
                    limit,
                    where: {
                        id: {
                            [Op.notIn]: arrayId,
                        },
                        themeId,
                        choosePositiveAnswer: true,
                    },
                    include: [
                        { model: model.ImageTask, as: 'image' },
                    ],
                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                    },
                });
            }
            if (chooseMissingWord) {
                tasks = await model.Task.findAndCountAll({
                    offset,
                    limit,
                    where: {
                        id: {
                            [Op.notIn]: arrayId,
                        },
                        themeId,
                        chooseMissingWord: true,
                    },
                    include: [
                        { model: model.ImageTask, as: 'image' },
                    ],
                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                    },
                });
            }
            if (chooseTranslateWords) {
                tasks = await model.Task.findAndCountAll({
                    offset,
                    limit,
                    where: {
                        id: {
                            [Op.notIn]: arrayId,
                        },
                        themeId,
                        chooseTranslateWords: true,
                    },
                    include: [
                        { model: model.ImageTask, as: 'image' },
                    ],
                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                    },
                });
            }
        }
        // @ts-ignore
        const { rows, count } = tasks;
        return {
            page,
            perPage: limit,
            rows,
            count,
        };
    }
}

export const filterTasksService = new FilterTasksService();
