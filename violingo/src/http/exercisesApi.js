import { $authHost } from "."

export const createExercise = async (lessonId, taskId) => {
    return await $authHost.post('/exercises', { lessonId, taskId });
}