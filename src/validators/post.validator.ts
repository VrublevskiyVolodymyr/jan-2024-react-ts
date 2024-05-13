import Joi from "joi";


export const postValidator = Joi.object({
    userId:Joi.number().max(10).min(1).messages({
        'string.max': 'userId can be a maximum 10',
        'string.min': 'userId can be a minimum 1'

    }).required(),
    title: Joi.string()
        .max(20)
        .regex(/^[a-zA-Zа-яА-ЯЇЁіІё]+$/)
        .messages({
            'string.pattern.base': 'The title should only contain letters',
            'string.max': 'The title can have a maximum of 20 characters'
        }).required(),
    body: Joi.string()
        .max(200)
        .regex(/^[a-zA-Zа-яА-ЯЇЁіІё]+$/)
        .messages({
            'string.pattern.base': 'The body should only contain letters',
            'string.max': 'The surname can have a maximum of 200 characters'
        }).required(),
})