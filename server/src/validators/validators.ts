import Joi from 'joi';
import { commonValidator } from './common.validator';

export const validators = {
    registration: Joi.object({
        email: commonValidator.emailValidator.required().error(new Error('Email is not valid')),
        password: Joi.string().required().trim().min(8)
            .error(new Error('Password is not valid, no space, min 8')),
        firstName: Joi.string().required().min(2).error(new Error('FirstName is not valid, min 2')),
        lastName: Joi.string().required().min(2).error(new Error('LastName is not valid, min 2')),
        age: Joi.number().min(18).error(new Error('Age is not valid must be less 18 years old')),
        phone: commonValidator.phoneValidator.required().error(new Error('Phone is not valid')),
        is_active: Joi.boolean(),
        is_staff: Joi.boolean(),
        is_superuser: Joi.boolean(),
    }),
    login: Joi.object({
        email: commonValidator.emailValidator.required().error(new Error('Email is not valid')),
        password: Joi.string().required().trim().min(8)
            .error(new Error('Password is not valid, no space, min 8')),
    }),
};
