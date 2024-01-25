import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

//environmental variable config
dotenv.config()

//Connecting to mongodb

mongoose.connect(process.env.MONGO_URL).then(() => { console.log('connected to db') }).catch((err) => console.log('error connecting db: ' + err))

//Creating app

const app = express();
app.use(express.json())

//Listen to the server
app.listen(3000, () => { console.log("listening to the port 3000") });


//test 
app.use('/api/user', userRoutes)

//auth
app.use('/api/auth', authRoutes)