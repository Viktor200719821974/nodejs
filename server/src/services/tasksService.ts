import { UploadedFile } from 'express-fileupload';
import { Op } from 'sequelize';

import { model } from '../models';
import { ITask } from '../interfaces';
import { chooseTypeTasksService } from './chooseTypeTasksService';

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
            tasks = await model.Task.findAll({ where: { themeId: id } });
        }
         if (
            themeId === 'undefined' && !chooseImage && !chooseAnswer && !choosePositiveAnswer
            && !chooseMissingWord && !chooseTranslateWords
        ) {
            tasks = await model.Task.findAll();
        }
        if (themeId !== 'undefined' && chooseImage) {
            tasks = await model.Task.findAll({ where: { themeId: id, chooseImage } });
        }
        if (themeId !== 'undefined' && chooseAnswer) {
            tasks = await model.Task.findAll({ where: { themeId: id, chooseAnswer } });
        }
        if (themeId !== 'undefined' && choosePositiveAnswer) {
            tasks = await model.Task.findAll({ where: { themeId: id, choosePositiveAnswer } });
        }
        if (themeId !== 'undefined' && chooseMissingWord) {
            tasks = await model.Task.findAll({ where: { themeId: id, chooseMissingWord } });
        }
        if (themeId !== 'undefined' && chooseTranslateWords) {
            tasks = await model.Task.findAll({ where: { themeId: id, chooseTranslateWords } });
        }
        if (themeId === 'undefined' && chooseImage) {
            tasks = await model.Task.findAll({ where: { chooseImage } });
        }
        if (themeId === 'undefined' && chooseAnswer) {
            tasks = await model.Task.findAll({ where: { chooseAnswer } });
        }
        if (themeId === 'undefined' && choosePositiveAnswer) {
            tasks = await model.Task.findAll({ where: { choosePositiveAnswer } });
        }
        if (themeId === 'undefined' && chooseMissingWord) {
            tasks = await model.Task.findAll({ where: { chooseMissingWord } });
        }
        if (themeId === 'undefined' && chooseTranslateWords) {
            tasks = await model.Task.findAll({ where: { chooseTranslateWords } });
        }
        if (question) {
            tasks = await model.Task.findAll({ where: {
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                }
            });
        } 
        if (question && themeId !== 'undefined' && chooseImage) {
            tasks = await model.Task.findAll({ where: {
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    themeId: id,
                    chooseImage,
                }
            });
        } 
        if (question && themeId !== 'undefined' && chooseAnswer) {
            tasks = await model.Task.findAll({ where: {
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    themeId: id,
                    chooseAnswer,
                }
            });
        } 
        if (question && themeId !== 'undefined' && choosePositiveAnswer) {
            tasks = await model.Task.findAll({ where: {
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    themeId: id,
                    choosePositiveAnswer,
                }
            });
        } 
        if (question && themeId !== 'undefined' && chooseMissingWord) {
            tasks = await model.Task.findAll({ where: {
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    themeId: id,
                    chooseMissingWord,
                }
            });
        } 
        if (question && themeId !== 'undefined' && chooseTranslateWords) {
            tasks = await model.Task.findAll({ where: {
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    themeId: id,
                    chooseTranslateWords,
                }
            });
        } 
        if (question && themeId === 'undefined' && chooseImage) {
            tasks = await model.Task.findAll({ where: {
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    chooseImage,
                }
            });
        } 
        if (question && themeId === 'undefined' && chooseAnswer) {
            tasks = await model.Task.findAll({ where: {
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    chooseAnswer,
                }
            });
        } 
        if (question && themeId === 'undefined' && choosePositiveAnswer) {
            tasks = await model.Task.findAll({ where: {
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    choosePositiveAnswer,
                }
            });
        } 
        if (question && themeId === 'undefined' && chooseMissingWord) {
            tasks = await model.Task.findAll({ where: {
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    chooseMissingWord,
                }
            });
        } 
        if (question && themeId === 'undefined' && chooseTranslateWords) {
            tasks = await model.Task.findAll({ where: {
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    chooseTranslateWords,
                }
            });
        } 
        if (word) {
            tasks = model.Task.findAll({ where: {
                    word: {
                        [Op.like]: `%${word}%`,
                    },
                }
            });
        }
        if (word && themeId !== 'undefined' && chooseMissingWord) {
            tasks = await model.Task.findAll({ where: {
                    word: {
                        [Op.like]: `%${word}%`,
                    },
                    themeId: id,
                    chooseMissingWord,
                }
            });
        } 
        if (answer) {
            tasks = model.Task.findAll({ where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                }
            });
        }
        if (answer && themeId !== 'undefined' && chooseImage) {
            tasks = await model.Task.findAll({ where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    themeId: id,
                    chooseImage,
                }
            });
        } 
        if (answer && themeId !== 'undefined' && chooseAnswer) {
            tasks = await model.Task.findAll({ where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    themeId: id,
                    chooseAnswer,
                }
            });
        } 
        if (answer && themeId !== 'undefined' && choosePositiveAnswer) {
            tasks = await model.Task.findAll({ where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    themeId: id,
                    choosePositiveAnswer,
                }
            });
        } 
        if (answer && themeId !== 'undefined' && chooseMissingWord) {
            tasks = await model.Task.findAll({ where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    themeId: id,
                    chooseMissingWord,
                }
            });
        } 
        if (answer && themeId !== 'undefined' && chooseTranslateWords) {
            tasks = await model.Task.findAll({ where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    themeId: id,
                    chooseTranslateWords,
                }
            });
        } 
        if (answer && themeId === 'undefined' && chooseImage) {
            tasks = await model.Task.findAll({ where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    chooseImage,
                }
            });
        } 
        if (answer && themeId === 'undefined' && chooseAnswer) {
            tasks = await model.Task.findAll({ where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    chooseAnswer,
                }
            });
        } 
        if (answer && themeId === 'undefined' && choosePositiveAnswer) {
            tasks = await model.Task.findAll({ where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    choosePositiveAnswer,
                }
            });
        } 
        if (answer && themeId === 'undefined' && chooseMissingWord) {
            tasks = await model.Task.findAll({ where: {
                answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    chooseMissingWord,
                }
            });
        } 
        if (answer && themeId === 'undefined' && chooseTranslateWords) {
            tasks = await model.Task.findAll({ where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    chooseTranslateWords,
                }
            });
        } 
        if (answer && question && themeId !== 'undefined' && chooseImage) {
            tasks = await model.Task.findAll({ where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    themeId: id,
                    chooseImage,
                }
            });
        } 
        if (answer && question && themeId !== 'undefined' && chooseAnswer) {
            tasks = await model.Task.findAll({ where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    themeId: id,
                    chooseAnswer,
                }
            });
        } 
        if (answer && question && themeId !== 'undefined' && choosePositiveAnswer) {
            tasks = await model.Task.findAll({ where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    themeId: id,
                    choosePositiveAnswer,
                }
            });
        } 
        if (answer && question && themeId !== 'undefined' && chooseMissingWord) {
            tasks = await model.Task.findAll({ where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    themeId: id,
                    chooseMissingWord,
                }
            });
        } 
        if (answer && question && themeId !== 'undefined' && chooseTranslateWords) {
            tasks = await model.Task.findAll({ where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    themeId: id,
                    chooseTranslateWords,
                }
            });
        } 
        if (answer && question && themeId === 'undefined' && chooseImage) {
            tasks = await model.Task.findAll({ where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    chooseImage,
                }
            });
        } 
        if (answer && question && themeId === 'undefined' && chooseAnswer) {
            tasks = await model.Task.findAll({ where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    chooseAnswer,
                }
            });
        } 
        if (answer && question && themeId === 'undefined' && choosePositiveAnswer) {
            tasks = await model.Task.findAll({ where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    choosePositiveAnswer,
                }
            });
        } 
        if (answer && question && themeId === 'undefined' && chooseMissingWord) {
            tasks = await model.Task.findAll({ where: {
                answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    chooseMissingWord,
                }
            });
        } 
        if (answer && question && themeId === 'undefined' && chooseTranslateWords) {
            tasks = await model.Task.findAll({ where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    question: {
                        [Op.like]: `%${question}%`,
                    },
                    chooseTranslateWords,
                }
            });
        } 
        if (answer && word && themeId !== 'undefined' && chooseMissingWord) {
            tasks = await model.Task.findAll({ where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    word: {
                        [Op.like]: `%${word}%`,
                    },
                    themeId: id,
                    chooseMissingWord,
                }
            });
        } 
        if (answer && word && themeId === 'undefined' && chooseMissingWord) {
            tasks = await model.Task.findAll({ where: {
                    answer: {
                        [Op.like]: `%${answer}%`,
                    },
                    word: {
                        [Op.like]: `%${word}%`,
                    },
                    chooseMissingWord,
                }
            });
        } 
        return tasks;
    }

    async getTasksForThemeAndChooseAnswer(chooseAnswer: boolean)
        : Promise<ITask[]> {
        return model.Task.findAll({
            where: {
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
            chooseMissingWord, chooseImage, choosePositiveAnswer, answer, word, 
        } = task;
        if (chooseImage) {
            return chooseTypeTasksService.chooseImage(answer, image, task);
        }
        if (chooseMissingWord) {
            return chooseTypeTasksService.chooseMissingWord(answer, word, task);
        }
        if (choosePositiveAnswer) {
            return chooseTypeTasksService
                .choosePositiveAnswer(answer, task);
        }
        return model.Task.create({ ...task });
    }

    async deleteTask(id: number): Promise<void> {
        await model.Task.destroy({ where: { id } });
    }
}

export const tasksService = new TasksService();
