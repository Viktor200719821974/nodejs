import { $authHost } from './index';

export const getTasksForTheme = async (title) => {
    return await $authHost.get('/tasks/' + title);
}

export const createTask = async (
    question, answer, themeId, chooseImage, chooseAnswer, choosePositiveAnswer, chooseMissingWord, chooseTranslateWords,
    ) => {
    return await $authHost.post('/tasks', {
        question, answer, themeId, chooseImage, chooseAnswer, choosePositiveAnswer, chooseMissingWord,
        chooseTranslateWords,
    });
}

export const getTasks = async () => {
    return await $authHost.get('/tasks');
}