import Joi from 'joi';
import { commonValidator } from './commonValidator';

export const validators = {
    registration: Joi.object({
        email: commonValidator.emailValidator.error(new Error('Email not valid')),
        password: Joi.string().required().trim().min(8)
            .error(new Error('Password is not valid, no space, min 8')),
        name: Joi.string().allow('')
            .error(new Error('Name is not valid, min 2, az, AZ and 0-9')),
        age: Joi.number().required().greater(17).error(new Error('Age is not valid must be less 18 years old')),
    }),
    forgetPassword: Joi.object({
        email: commonValidator.emailValidator.error(new Error('Email not valid')),
    }),
    changePassword: Joi.object({
        password: Joi.string().required().trim().min(8)
            .error(new Error('Password is not valid, no space, min 8')),
        repeatPassword: Joi.string().required().trim().min(8)
            .error(new Error('Password is not valid, no space, min 8')),
    }),
    theme: Joi.object({
        title: Joi.string().required().min(1).max(100)
            .error(new Error('Name theme is not valid, cannot be empty, max length 100 ')),
    }),
    tasks: Joi.object({
        question: Joi.string().required().allow(null).allow('').max(100)
            .error(new Error('Question is not valid, max length 100 ')),
        answer: Joi.string().required().allow(null).allow('').min(1).max(100)
            .error(new Error('Answer is not valid, max length 100 ')),
        themeId: Joi.number().required()
            .error(new Error('Choose theme')),
        word: Joi.string().allow(null).allow('').max(100)
            .error(new Error('Word is not valid, max length 100')),
        translate: Joi.string().allow(null).allow('').max(100)
            .error(new Error('Translate is not valid, max length 100')),
        translatewordsTasks: Joi.string().allow(null)
            .error(new Error('Translate words tasks is not valid')),
        image: Joi.string().allow(null),
        chooseImage: Joi.boolean(),
        chooseAnswer: Joi.boolean(),
        choosePositiveAnswer: Joi.boolean(), 
        chooseMissingWord: Joi.boolean(),
        chooseTranslateWords: Joi.boolean(),
    }),
    lessons: Joi.object({
        lessonNumber: Joi.number().required().min(1)
            .error(new Error('Lesson number is not valid, min 1 ')),
        themeId: Joi.number().required()
            .error(new Error('Choose theme')),
    }),
    exercises: Joi.object({
        lessonId: Joi.number().required().min(1)
            .error(new Error('Choose lesson number')),
        image: Joi.string().allow(null),
        taskId: Joi.number().required().min(1)
            .error(new Error('Choose task')),
    }),
};
