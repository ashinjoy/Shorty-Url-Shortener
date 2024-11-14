import { body } from "express-validator"
export const loginValidate = [
    body('email').notEmpty().withMessage('Email is required'),
    body('password').notEmpty().withMessage('Password is required')

]
export const signupValidate = [
    body('uname').notEmpty().withMessage('Name is required'),
    body('email').notEmpty().withMessage('Email is required'),
    body('password').isLength({min:6}).withMessage('Minimum 6 characters required'),
    body('confirmPwd').notEmpty().withMessage('confirm password required')
]

export const shortUrlValidate = [
    body('userId').notEmpty().withMessage('userId is required'),
    body('url').notEmpty().withMessage('url is required')
]