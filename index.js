import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';


import errorHandler from './middlewares/errorHandler.js';
import foodItemsController from './controllers/fooditems.controller.js';
import usersController from './controllers/users.controller.js';
import mealsController from './controllers/meals.controller.js';

dotenv.config() // loads the environment variables
const app = express();

const port = process.env.PORT || 5000;


// verious express.js middleware libraries
app.use(express.json())
app.use(morgan("dev")) 
app.use(cors({
    origin: "*"
}))
app.use(helmet()) 


// controllers for different services
app.use(foodItemsController)
    .use(usersController)
    .use(mealsController);

// error handling middlewares
app.use((req, res, next) => {
    const err = new Error("Not found")
    err.status = 404;
    next(err)
})

app.use(errorHandler)

mongoose.connect(process.env.MONGODB_URI).then(res => {
    console.log("MongoDB connected"); // first connect the mongodb then start the server
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
}).catch(err => {
    console.error(err)
})

