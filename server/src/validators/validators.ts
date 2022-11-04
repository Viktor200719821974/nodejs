import Joi from 'joi';
import { commonValidator } from './commonValidator';

export const validators = {
    registration: Joi.object({
        email: commonValidator.emailValidator.error(new Error('Email not valid')),
        password: Joi.string().required().trim().min(8)
            .error(new Error('Password is not valid, no space, min 8')),
        name: Joi.string().required().alphanum().min(2)
            .error(new Error('Name is not valid, min 2, az, AZ and 0-9')),
        surname: Joi.string().required().alphanum().min(2)
            .error(new Error('Surname is not valid, min 2, az, AZ and 0-9')),
        age: Joi.number().required().greater(17).error(new Error('Age is not valid must be less 18 years old')),
        phone: commonValidator.phoneValidator.messages({ 'any.only': 'Phone is not valid' }),
    }),
};