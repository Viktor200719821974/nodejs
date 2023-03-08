import { IExercise } from '../interfaces';
import { model } from '../models';

class ExercisesService {
    async getExercises(): Promise<IExercise[]> {
        return model.Exercise.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
        });
    }

    async getExercisesLesson(lessonNumber: number): Promise<IExercise[]> {
        const lessonId = await model.Lesson.findOne({ where: { lessonNumber }})
            .then(data => data?.id);
        return model.Exercise.findAll({ 
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
            where: { lessonId }
        });
    }

    async createExercise(exercise: IExercise, lessonNumber: number): Promise<IExercise> {
        const lessonId = await model.Lesson.findOne( { where: { lessonNumber } })
            .then(data => data?.id);
        //@ts-ignore
        return model.Exercise.create({ ...exercise, lessonId });
    }
}

export const exercisesService = new ExercisesService();