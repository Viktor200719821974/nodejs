import { $authHost } from './index';

export const createLookLessonAnswers = async (formData) => {
    return await $authHost.post('/lookLessonAnswers', formData);
}

export const getLookLessonAnswers = async (lessonId) => {
    return await $authHost.get('/lookLessonAnswers/' + lessonId);
}