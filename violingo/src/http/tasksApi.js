import { $authHost } from './index';

export const getTasksForTheme = async (title) => {
    return await $authHost.get('/tasks/' + title);
}

export const createTask = async (
    question, answer, themeId, chooseImage, chooseAnswer, choosePositiveAnswer, chooseMissingWord, chooseTranslateWords,
    word,
    ) => {
    return await $authHost.post('/tasks', {
        question, answer, themeId, chooseImage, chooseAnswer, choosePositiveAnswer, chooseMissingWord,
        chooseTranslateWords, word,
    });
}

export const getTasks = async (
    themeId, chooseImage, chooseAnswer, choosePositiveAnswer, chooseMissingWord, chooseTranslateWords,
) => {
    return await $authHost.get(`/tasks?themeId=${themeId}&chooseImage=${chooseImage}&chooseAnswer=${chooseAnswer}
    &choosePositiveAnswer=${choosePositiveAnswer}&chooseMissingWord=${chooseMissingWord}
    &chooseTranslateWords=${chooseTranslateWords}`);
}