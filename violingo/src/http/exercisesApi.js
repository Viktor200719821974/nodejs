import { $authHost } from '.';

export const createExercise = async (formData) => {
    return await $authHost.post('/exercises', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    });
}
export const getExercisesForLesson = async (lessonId) => {
    return await $authHost.get('/exercises/' + lessonId);
}