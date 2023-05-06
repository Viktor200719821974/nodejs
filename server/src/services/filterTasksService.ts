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
        lessonId: string,
        taskId: string,
    ): Promise<ITask[] | undefined> {
        let tasks;
        let id;
        if (themeId !== '0') {
            id = +themeId;
        }
        if (themeId !== '0') {
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
        if (themeId === '0') {
            tasks = await model.Task.findAll({
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (themeId !== '0' && chooseImage) {
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
        if (themeId !== '0' && chooseAnswer) {
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
        if (themeId !== '0' && choosePositiveAnswer) {
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
        if (themeId !== '0' && chooseMissingWord) {
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
        if (themeId !== '0' && chooseTranslateWords) {
            tasks = await model.Task.findAll({ 
                where: { chooseAnswer: true, themeId }, 
            });
            const arrayAnswer = tasks.map(c => c.answer);
            const cyrillicPattern = /^[\u0400-\u04FF]+$/;
            let arrayAnswerEnglish: string[] = [];
            for (let i = 0; i < arrayAnswer.length; i++) {
                if (!cyrillicPattern.test(arrayAnswer[i])){
                    arrayAnswerEnglish.push(arrayAnswer[i]);
                }
            }
            tasks = await model.Task.findAll({
                where: {
                    answer: {
                        [Op.or]: arrayAnswerEnglish
                    }
                },
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            }); 
        }
        if (themeId !== '0' && chooseTranslateWords) {
            tasks = await model.Task.findAll({ 
                where: { chooseAnswer: true, themeId }, 
            });
            const arrayAnswer = tasks.map(c => c.answer);
            const cyrillicPattern = /^[\u0400-\u04FF]+$/;
            let arrayAnswerEnglish: string[] = [];
            for (let i = 0; i < arrayAnswer.length; i++) {
                if (!cyrillicPattern.test(arrayAnswer[i])){
                    arrayAnswerEnglish.push(arrayAnswer[i]);
                }
            }
            tasks = await model.Task.findAll({
                where: {
                    answer: {
                        [Op.or]: arrayAnswerEnglish
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
        if (themeId === '0' && chooseImage) {
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
        if (themeId === '0' && chooseAnswer) {
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
        if (themeId === '0' && choosePositiveAnswer) {
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
        if (themeId === '0' && chooseMissingWord) {
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
        if (themeId === '0' && chooseTranslateWords) {
            tasks = [];
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
        if (question && themeId !== '0' && chooseImage) {
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
        if (question && themeId !== '0' && chooseAnswer) {
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
        if (question && themeId !== '0' && choosePositiveAnswer) {
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
        if (question && themeId !== '0' && chooseMissingWord) {
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
        if (question && themeId === '0' && chooseImage) {
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
        if (question && themeId === '0' && chooseAnswer) {
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
        if (question && themeId === '0' && choosePositiveAnswer) {
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
        if (question && themeId === '0' && chooseMissingWord) {
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
        if (word && themeId !== '0' && chooseMissingWord) {
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
        if (answer && themeId !== '0' && chooseImage) {
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
        if (answer && themeId !== '0' && chooseAnswer) {
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
        if (answer && themeId !== '0' && choosePositiveAnswer) {
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
        if (answer && themeId !== '0' && chooseMissingWord) {
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
        if (answer && themeId === '0' && chooseImage) {
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
        if (answer && themeId === '0' && chooseAnswer) {
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
        if (answer && themeId === '0' && choosePositiveAnswer) {
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
        if (answer && themeId === '0' && chooseMissingWord) {
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
        if (answer && question && themeId !== '0' && chooseImage) {
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
        if (answer && question && themeId !== '0' && chooseAnswer) {
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
        if (answer && question && themeId !== '0' && choosePositiveAnswer) {
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
        if (answer && question && themeId !== '0' && chooseMissingWord) {
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
        if (answer && question && themeId === '0' && chooseImage) {
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
        if (answer && question && themeId === '0' && chooseAnswer) {
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
        if (answer && question && themeId === '0' && choosePositiveAnswer) {
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
        if (answer && question && themeId === '0' && chooseMissingWord) {
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
        if (answer && word && themeId !== '0' && chooseMissingWord) {
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
        if (answer && word && themeId === '0' && chooseMissingWord) {
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
        if (lessonId !== '0' && themeId !== '0') {
            const arrayExercisesLesson = await model.Exercise.findAll({ where: { lessonId, chooseImage: false } });
            const arrayExercisesLessonChooseImage = await model.Exercise.findAll( { where: { lessonId, chooseImage: true } });
            let arrayId: any = [];
            const arrayTaskId = arrayExercisesLesson.map(c => c.tasks);
            for(let i = 0; i < arrayTaskId.length; i++){
                arrayId = arrayId.concat(arrayTaskId[i]);
            }
            if (arrayExercisesLessonChooseImage.length !== 0) {
                const arrayExerciseQuestion = arrayExercisesLessonChooseImage.map(c => c.question);
                const arrayExerciseTasksChooseImage = await model.Task.findAll({ 
                    where: { 
                        question: {
                            [Op.or]: arrayExerciseQuestion
                        }
                    }
                });
                const arrayIdTasksChooseImage = arrayExerciseTasksChooseImage.map(c => c.id);
                arrayId = arrayId.concat(arrayIdTasksChooseImage);
            }
            tasks = await model.Task.findAll({ 
                where: {
                    id: {
                        [Op.notIn]: arrayId
                    },
                    themeId
                },
                include: [
                    { model: model.ImageTask, as: 'image' },
                ],
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
            if (taskId !== '0') {
                tasks = tasks.filter(c => c.id !== Number(taskId));
            }
        }
        return tasks;
    }
}

export const filterTasksService = new FilterTasksService;