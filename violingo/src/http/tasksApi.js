import { $authHost } from './index';

export const getTasksForTheme = async (title) => {
    return await $authHost.get('/tasks/' + title);
}

export const createTask = async (formData) => {
    return await $authHost.post('/tasks', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    });
}

export const getTasks = async (
    themeId, chooseImage, chooseAnswer, choosePositiveAnswer, chooseMissingWord, chooseTranslateWords, question, answer, word,
) => {
    return await $authHost.get(`/tasks?themeId=${themeId}&chooseImage=${chooseImage}&chooseAnswer=${chooseAnswer}&choosePositiveAnswer=${choosePositiveAnswer}&chooseMissingWord=${chooseMissingWord}&chooseTranslateWords=${chooseTranslateWords}&question=${question}&answer=${answer}&word=${word}`);
}

export const deleteTask = async (id) => {
    return await $authHost.delete(`/tasks/${id}`);
}