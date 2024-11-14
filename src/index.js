import express from 'express'
import cookieParser from 'cookie-parser'
import { dbConnection } from './config/mongoConnect.js'
import { secret } from './constants/constants.js'
import router from './routes/routes.js'
const app = express()
const {PORT} = secret
await dbConnection()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use('/',router)
app.listen(PORT,()=>console.log('Server Connected SuccessFully'))