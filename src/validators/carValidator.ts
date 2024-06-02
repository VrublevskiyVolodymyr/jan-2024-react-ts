import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().min(1).max(20).regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).messages({
        'string.pattern.base': 'The brand should only contain letters',
        'string.max': 'The title can have a maximum of 20 characters',
        'string.min': 'The title can have  a minimum 1 character'
    }).required(),
    price: Joi.number().min(0).max(1000000).messages({
        'string.max': 'price can be a maximum 1000000',
        'string.min': 'price can be a minimum 0'
    }).required(),
    year: Joi.number().min(1990).max(new Date().getFullYear()).messages({
        'string.max': 'year can be a maximum this date',
        'string.min': 'year can be a minimum 1990'
    }).required()
});

export {carValidator}