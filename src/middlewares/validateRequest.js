import { validationResult } from "express-validator"

export const validateRequest = (req,res,next)=>{
    const validate = validationResult(req)
    if(!validate.isEmpty()){
        console.log(validate);
    }
    next()
}


