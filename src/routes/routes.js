import express from 'express'
import {login, logout, signup} from '../controllers/authController.js'
import { loginValidate, shortUrlValidate, signupValidate } from '../middlewares/inputValidation.js'
import { validateRequest } from '../middlewares/validateRequest.js'
import { isUserLogin } from '../middlewares/authenticationMiddleware.js'
import { redirectToOriginalURL, shortenUrl } from '../controllers/urlController.js'

const router = express.Router()
router.route('/signup').post(signupValidate,validateRequest,signup)
router.route('/login').post(loginValidate,validateRequest,login)
router.route('/logout').get(isUserLogin,logout)
router.route('/short-url').post(isUserLogin,shortenUrl)
router.route('/:shortUrl').get(isUserLogin,redirectToOriginalURL)



export default router