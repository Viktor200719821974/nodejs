import { IExercise, ILesson, ITask } from '../interfaces';
import { model } from '../models';

class LessonService {
    async getLessons(): Promise<ILesson[]> {
        return model.Lesson.findAll();
    }
    async createLesson(lessonNumber: number): Promise<ILesson> {
        //@ts-ignore
        return model.Lesson.create({ lessonNumber });
    }

    async createExercise(exercise: IExercise, lessonNumber: number): Promise<IExercise> {
        const lessonId = await model.Lesson.findOne( { where: { lessonNumber } })
            .then(data => data?.id);
        console.log(lessonId);
        //@ts-ignore
        return model.Exercise.create({ ...exercise, lessonId });
    }

    async createTaskExercise(task: ITask, exerciseId: number) {
        return model.Task.create({ ...task, exerciseId });
    }

    async findLessonByNumber(lessonNumber: number): Promise<ILesson | null> {
        return model.Lesson.findOne({ where: { lessonNumber } });
    }
}

export const lessonService = new LessonService();