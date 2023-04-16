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
}

export const filterTasksService = new FilterTasksService;