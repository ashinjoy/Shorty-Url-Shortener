import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { dbConnection } from './config/mongoConnect.js'
import { secret } from './constants/constants.js'
import router from './routes/routes.js'
import { errorHandler } from './middlewares/errorHandling.js'
const app = express()
const {PORT} = secret
await dbConnection()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use(cors({
   
    credentials:true
})) 
app.use('/',router)
app.use(errorHandler)
app.listen(PORT,()=>console.log('Server Connected SuccessFully'))