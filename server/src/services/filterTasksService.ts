import { Op } from 'sequelize';

import { ITask } from '../interfaces';
import { model } from '../models';

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
    ): Promise<ITask[] | undefined> {
        let tasks;
        let id;
        if (themeId !== 'undefined') {
            id = +themeId;
        }
        if (
            themeId !== 'undefined' && !chooseImage && !chooseAnswer && !choosePositiveAnswer
            && !chooseMissingWord && !chooseTranslateWords
        ) {
            tasks = await model.Task.findAll({ 
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: { themeId: id }, 
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (
            themeId === 'undefined' && !chooseImage && !chooseAnswer && !choosePositiveAnswer
            && !chooseMissingWord && !chooseTranslateWords
        ) {
            tasks = await model.Task.findAll({
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (themeId !== 'undefined' && chooseImage) {
            tasks = await model.Task.findAll({
                include: [
                    { model: model.ImageTask, as: 'image' },
                ], 
                where: { themeId: id, chooseImage }, 
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (themeId !== 'undefined' && chooseAnswer) {
            tasks = await model.Task.findAll({ 
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: { themeId: id, chooseAnswer }, 
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (themeId !== 'undefined' && choosePositiveAnswer) {
            tasks = await model.Task.findAll({ 
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: { themeId: id, choosePositiveAnswer },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (themeId !== 'undefined' && chooseMissingWord) {
            tasks = await model.Task.findAll({ 
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: { themeId: id, chooseMissingWord }, 
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (themeId !== 'undefined' && chooseTranslateWords) {
            tasks = await model.Task.findAll({ 
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: { themeId: id, chooseTranslateWords }, 
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (themeId === 'undefined' && chooseImage) {
            tasks = await model.Task.findAll({ 
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: { chooseImage }, 
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (themeId === 'undefined' && chooseAnswer) {
            tasks = await model.Task.findAll({ 
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: { chooseAnswer }, 
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (themeId === 'undefined' && choosePositiveAnswer) {
            tasks = await model.Task.findAll({ 
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: { choosePositiveAnswer }, 
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (themeId === 'undefined' && chooseMissingWord) {
            tasks = await model.Task.findAll({ 
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: { chooseMissingWord }, 
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (themeId === 'undefined' && chooseTranslateWords) {
            tasks = await model.Task.findAll({ 
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: { chooseTranslateWords }, 
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (question) {
            tasks = await model.Task.findAll({ 
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
        if (question && themeId !== 'undefined' && chooseImage) {
            tasks = await model.Task.findAll({ 
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
        if (question && themeId !== 'undefined' && chooseAnswer) {
            tasks = await model.Task.findAll({ 
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
        if (question && themeId !== 'undefined' && choosePositiveAnswer) {
            tasks = await model.Task.findAll({ 
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
        if (question && themeId !== 'undefined' && chooseMissingWord) {
            tasks = await model.Task.findAll({ 
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
        if (question && themeId !== 'undefined' && chooseTranslateWords) {
            tasks = await model.Task.findAll({ 
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    themeId: id,
                    chooseTranslateWords,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        } 
        if (question && themeId === 'undefined' && chooseImage) {
            tasks = await model.Task.findAll({ 
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
        if (question && themeId === 'undefined' && chooseAnswer) {
            tasks = await model.Task.findAll({ 
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
        if (question && themeId === 'undefined' && choosePositiveAnswer) {
            tasks = await model.Task.findAll({ 
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
        if (question && themeId === 'undefined' && chooseMissingWord) {
            tasks = await model.Task.findAll({ 
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
        if (question && themeId === 'undefined' && chooseTranslateWords) {
            tasks = await model.Task.findAll({ 
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    chooseTranslateWords,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        } 
        if (word) {
            tasks = model.Task.findAll({ 
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
        if (word && themeId !== 'undefined' && chooseMissingWord) {
            tasks = await model.Task.findAll({ 
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
            tasks = model.Task.findAll({ 
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
        if (answer && themeId !== 'undefined' && chooseImage) {
            tasks = await model.Task.findAll({ 
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
        if (answer && themeId !== 'undefined' && chooseAnswer) {
            tasks = await model.Task.findAll({ 
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
        if (answer && themeId !== 'undefined' && choosePositiveAnswer) {
            tasks = await model.Task.findAll({ 
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
        if (answer && themeId !== 'undefined' && chooseMissingWord) {
            tasks = await model.Task.findAll({ 
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
        if (answer && themeId !== 'undefined' && chooseTranslateWords) {
            tasks = await model.Task.findAll({ 
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    themeId: id,
                    chooseTranslateWords,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        } 
        if (answer && themeId === 'undefined' && chooseImage) {
            tasks = await model.Task.findAll({ 
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
        if (answer && themeId === 'undefined' && chooseAnswer) {
            tasks = await model.Task.findAll({ 
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
        if (answer && themeId === 'undefined' && choosePositiveAnswer) {
            tasks = await model.Task.findAll({ 
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
        if (answer && themeId === 'undefined' && chooseMissingWord) {
            tasks = await model.Task.findAll({ 
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
        if (answer && themeId === 'undefined' && chooseTranslateWords) {
            tasks = await model.Task.findAll({ 
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    chooseTranslateWords,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        } 
        if (answer && question && themeId !== 'undefined' && chooseImage) {
            tasks = await model.Task.findAll({ 
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
        if (answer && question && themeId !== 'undefined' && chooseAnswer) {
            tasks = await model.Task.findAll({ 
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
        if (answer && question && themeId !== 'undefined' && choosePositiveAnswer) {
            tasks = await model.Task.findAll({ 
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
        if (answer && question && themeId !== 'undefined' && chooseMissingWord) {
            tasks = await model.Task.findAll({ 
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
        if (answer && question && themeId !== 'undefined' && chooseTranslateWords) {
            tasks = await model.Task.findAll({ 
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
                    chooseTranslateWords,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        } 
        if (answer && question && themeId === 'undefined' && chooseImage) {
            tasks = await model.Task.findAll({ 
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
        if (answer && question && themeId === 'undefined' && chooseAnswer) {
            tasks = await model.Task.findAll({ 
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
        if (answer && question && themeId === 'undefined' && choosePositiveAnswer) {
            tasks = await model.Task.findAll({ 
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
        if (answer && question && themeId === 'undefined' && chooseMissingWord) {
            tasks = await model.Task.findAll({ 
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
        if (answer && question && themeId === 'undefined' && chooseTranslateWords) {
            tasks = await model.Task.findAll({ 
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
                    chooseTranslateWords,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        } 
        if (answer && word && themeId !== 'undefined' && chooseMissingWord) {
            tasks = await model.Task.findAll({ 
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
        if (answer && word && themeId === 'undefined' && chooseMissingWord) {
            tasks = await model.Task.findAll({
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
        return tasks;
    }
}

export const filterTasksService = new FilterTasksService;