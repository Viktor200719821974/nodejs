import { ILesson, ITask } from '../interfaces';
import { model } from '../models';

class LessonsService {
    async getLessons(themeId: string, moduleId: string): Promise<ILesson[]> {
        if (themeId !== 'undefined' && moduleId === 'undefined') {
            return model.Lesson.findAll({
                where: { themeId },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (moduleId !== 'undefined' && themeId === 'undefined') {
            return model.Lesson.findAll({
                where: { moduleId },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        if (moduleId !== 'undefined' && themeId !== 'undefined') {
            return model.Lesson.findAll({
                where: { moduleId, themeId },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
        }
        return model.Lesson.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
        });
    }

    async getLessonById(id: number): Promise<ILesson | null> {
        return model.Lesson.findOne({
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
            where: { id },
            include: [
                { model: model.Exercise, as: 'exercises' },
            ],
        });
    }

    async createLesson(lessonNumber: number, themeId: number, moduleId: number): Promise<ILesson> {
        // @ts-ignore
        return model.Lesson.create({ lessonNumber, themeId, moduleId });
    }

    async createTaskExercise(task: ITask, themeId: number) {
        return model.Task.create({ ...task, themeId });
    }

    async findLessonByNumberByThemeId(
        lessonNumber: number,
        themeId: number,
        moduleId: number,
    ): Promise<ILesson | null> {
        return model.Lesson.findOne({ where: { lessonNumber, themeId, moduleId } });
    }
}

export const lessonsService = new LessonsService();
