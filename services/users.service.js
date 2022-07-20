import express from 'express';
import User from '../models/User.js';

const routes = express.Router();

routes.post("/users", async (req, res) => {
    try {
        const user = await User.create({
            ...req.body
        })

        res.send(user);
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
})