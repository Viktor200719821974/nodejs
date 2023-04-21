import { $authHost } from './index';

export const createLesson = async (lessonNumber, themeId) => {
    return await $authHost.post('/lessons', { lessonNumber, themeId });
}