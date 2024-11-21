import jwt from 'jsonwebtoken'
import { secret } from '../constants/constants.js';
const {JWT_SECRET} = secret

export const createAccessToken = async(payload)=>{
    try {
       return await jwt.sign(payload,"893893893IUEIUEWIUEIU2932932932SDJSDKJSKJ")
    } catch (error) {
        console.error(error);
        throw error
        
    }
}

export const decodeRefreshToken = async(token)=>{
    try {
        return await jwt.verify(token,"893893893IUEIUEWIUEIU2932932932SDJSDKJSKJ")
    } catch (error) {
        console.error(error);
        throw error
    }
}