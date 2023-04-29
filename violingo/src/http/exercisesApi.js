import { $authHost } from "."

export const createExercise = async (lessonId, taskId) => {
    return await $authHost.post('/exercises', { lessonId, taskId });
}
export const getExercisesForLesson = async (lessonId) => {
    return await $authHost.get('/exercises/' + lessonId);
}