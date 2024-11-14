import { userModel } from "../models/userModel.js";
import { comparePassword, hashPassword } from "../utils/bcrypt.js";
import { createAccessToken } from "../utils/jwt.js";

export const signup = async (req, res, next) => {
  try {
    const { uname, email, password, confirmPwd } = req.body;
    if (password !== confirmPwd) {
      const error = new Error("Enter Matching Password");
      error.statusCode = 403;
      throw error;
    }
    const hashedPassword = await hashPassword(password);
    const createUser = await userModel.create({ uname, email,password:hashedPassword });
    res.status(201).json({success:true,message:'user created success'})
  } catch (error) {
    console.error(error);
    next(error)
    
  }
};

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        console.log(email,password);
        
        const user = await userModel.findOne({email}).lean()
        if(!user){
            const error = new Error('Invalid User! Authentication failed')
            error.statusCode = 401
            throw error
        }
        const comparedPassword = await comparePassword(password,user.password)
        console.log(comparedPassword);
        
        if(!comparedPassword){
            const error = new Error('Password Invalid')
            error.statusCode = 403
            throw error
        }
        console.log(user);
        
        
        console.log(user);
        
        const accessToken = await createAccessToken({...user,password:''})
        res.cookie('accessToken',accessToken)
        res.status(200).json({status:true,message:'login success'})
    } catch (error) {
        console.error(error);
        next(error)
        
    }

};

export const logout = async(req,res,next)=>{
    try {
        res.clearCookie('accessToken')
        res.json({success:true,message:'logged out'})
    } catch (error) {
        console.error(error);
        next(error)
        
    }
}
