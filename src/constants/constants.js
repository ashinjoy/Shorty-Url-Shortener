import { configDotenv } from "dotenv"
configDotenv()
const {PORT,MONGO_DB,JWT_SECRET} = process.env

export const secret = {
    PORT : PORT || 3001  , 
    MONGO : MONGO_DB,
    JWT_SECRET:JWT_SECRET
}