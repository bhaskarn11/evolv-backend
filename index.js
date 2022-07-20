import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

dotenv.config()
const app = express();

const port = process.env.PORT || 5000;


app.use(morgan("dev"))
app.use(cors({
    origin: "*"
}))
app.use(helmet())

app.get("/", (req, res) => {
    res.send("Hello world")
})

mongoose.connect(process.env.MONGODB_URI).then(res => {
    console.log("MongoDB connected");
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
}).catch(err => {
    console.error(err)
})

