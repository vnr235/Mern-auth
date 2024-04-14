import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
dotenv.config();

mongoose.connect(process.env.Mongo)
    .then(() => {
        console.log('connected to mongodb');
    })
    .catch(err => { console.error(err) });
const app = express();

app.listen(3000, () => {
    console.log(`server is runing on port 3000`)
});

app.use("/api/user", userRoutes);