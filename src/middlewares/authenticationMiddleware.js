import { userModel } from "../models/userModel.js";
import { decodeRefreshToken } from "../utils/jwt.js";

export const isUserLogin = async (req, res, next) => {
  try {
    const accessToken = req.cookies["accessToken"];
    console.log(accessToken);
    
    if (!accessToken) {
      const error = new Error("Bad Request");
      error.statusCode = 400;
      throw error;
    }
    const verifyToken = await decodeRefreshToken(accessToken);
    console.log(verifyToken);
    
    const user = await userModel.findById({ _id: verifyToken._id });
    if (!user) {
      const error = new Error("Unauthorized");
      error.statusCode = 401;
      throw error;
    }
    console.log(user);
    
    req.userID = user?._id
    next()
  } catch (error) {
    console.error(error);
    next(error);
  }
};
