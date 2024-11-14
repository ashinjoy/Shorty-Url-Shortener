import express from 'express'
import {login, logout, signup} from '../controllers/authController.js'
import { loginValidate, signupValidate } from '../middlewares/inputValidation.js'
import { validateRequest } from '../middlewares/validateRequest.js'
import { isUserLogin } from '../middlewares/authenticationMiddleware.js'

const router = express.Router()
router.route('/signup').post(signupValidate,validateRequest,signup)
router.route('/login').post(loginValidate,validateRequest,login)
router.route('/logout').get(isUserLogin,logout)  

export default router