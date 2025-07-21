import express from 'express';
const app=express();
import userRouter from './routes/user.routes.js'
app.use(express.urlencoded());
app.use(express.json());
app.use('/api',userRouter);
export default app;