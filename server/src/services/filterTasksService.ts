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
                where: { chooseAnswer: true }, 
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
        // if (question && themeId !== 'undefined' && chooseTranslateWords) {
        //     tasks = await model.Task.findAll({ 
        //         include: [
        //             { model: model.ImageTask, as: 'image' },
        //         ],
        //         where: {
        //             question: {
        //                 [Op.like]: `%${question}%`,
        //             },
        //             themeId: id,
        //             chooseTranslateWords,
        //         },
        //         attributes: {
        //             exclude: ['createdAt', 'updatedAt'],
        //         },
        //     });
        // } 
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
        // if (question && themeId === 'undefined' && chooseTranslateWords) {
        //     tasks = await model.Task.findAll({ 
        //         include: [
        //             { model: model.ImageTask, as: 'image' },
        //         ],
        //         where: {
        //             question: {
        //                 [Op.like]: `%${question}%`,
        //             },
        //             chooseTranslateWords,
        //         },
        //         attributes: {
        //             exclude: ['createdAt', 'updatedAt'],
        //         },
        //     });
        // } 
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
        // if (answer && themeId !== 'undefined' && chooseTranslateWords) {
        //     tasks = await model.Task.findAll({ 
        //         include: [
        //             { model: model.ImageTask, as: 'image' },
        //         ],
        //         where: {
        //             answer: {
        //                 [Op.like]: `%${answer}%`,
        //             },
        //             themeId: id,
        //             chooseTranslateWords,
        //         },
        //         attributes: {
        //             exclude: ['createdAt', 'updatedAt'],
        //         },
        //     });
        // } 
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
        // if (answer && themeId === 'undefined' && chooseTranslateWords) {
        //     tasks = await model.Task.findAll({ 
        //         include: [
        //             { model: model.ImageTask, as: 'image' },
        //         ],
        //         where: {
        //             answer: {
        //                 [Op.like]: `%${answer}%`,
        //             },
        //             chooseTranslateWords,
        //         },
        //         attributes: {
        //             exclude: ['createdAt', 'updatedAt'],
        //         },
        //     });
        // } 
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
        // if (answer && question && themeId !== 'undefined' && chooseTranslateWords) {
        //     tasks = await model.Task.findAll({ 
        //         include: [
        //             { model: model.ImageTask, as: 'image' },
        //         ],
        //         where: {
        //             answer: {
        //                 [Op.like]: `%${answer}%`,
        //             },
        //             question: {
        //                 [Op.like]: `%${question}%`,
        //             },
        //             themeId: id,
        //             chooseTranslateWords,
        //         },
        //         attributes: {
        //             exclude: ['createdAt', 'updatedAt'],
        //         },
        //     });
        // } 
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
        // if (answer && question && themeId === 'undefined' && chooseTranslateWords) {
        //     tasks = await model.Task.findAll({ 
        //         include: [
        //             { model: model.ImageTask, as: 'image' },
        //         ],
        //         where: {
        //             answer: {
        //                 [Op.like]: `%${answer}%`,
        //             },
        //             question: {
        //                 [Op.like]: `%${question}%`,
        //             },
        //             chooseTranslateWords,
        //         },
        //         attributes: {
        //             exclude: ['createdAt', 'updatedAt'],
        //         },
        //     });
        // } 
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
        if (lessonId !== '0' && themeId !== 'undefined') {
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