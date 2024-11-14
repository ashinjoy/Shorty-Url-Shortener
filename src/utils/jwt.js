import jwt from 'jsonwebtoken'
import { secret } from '../constants/constants.js';
const {JWT_SECRET} = secret

export const createAccessToken = async(payload)=>{
    try {
       return await jwt.sign(payload,JWT_SECRET)
    } catch (error) {
        console.error(error);
        throw error
        
    }
}

export const decodeRefreshToken = async(token)=>{
    try {
        return await jwt.verify(token,JWT_SECRET)
    } catch (error) {
        console.error(error);
        throw error
    }
}