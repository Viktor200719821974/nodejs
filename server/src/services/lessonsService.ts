import { ILesson, ITask } from '../interfaces';
import { model } from '../models';

class LessonsService {
    async getLessons(): Promise<ILesson[]> {
        return model.Lesson.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
        });
    }

    async getLessonById(id: number) {
        return model.Lesson.findOne({
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
            where: { id },
            include: [
                { model: model.Exercise, as: 'exercises' },
                // { model: model.ImageDeviceAws, as: 'imageDeviceAws' },
                // { model: model.Rating, as: 'rating' },
            ],
        });
    }

    async createLesson(lessonNumber: number): Promise<ILesson> {
        // @ts-ignore
        return model.Lesson.create({ lessonNumber });
    }

    async createTaskExercise(task: ITask, themeId: number) {
        return model.Task.create({ ...task, themeId });
    }

    async findLessonByNumber(lessonNumber: number): Promise<ILesson | null> {
        return model.Lesson.findOne({ where: { lessonNumber } });
    }
}

export const lessonsService = new LessonsService();
