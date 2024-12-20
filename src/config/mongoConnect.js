import mongoose from "mongoose";
import { secret } from "../constants/constants.js";
const { MONGO } = secret;

export const dbConnection = async () => {
  try { 
    await mongoose.connect(MONGO);
    return
  } catch (error) {
    console.log("MongoDB Connection failed !");
    console.error(error);
    throw error;
  }
};
