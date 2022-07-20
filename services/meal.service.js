import express from 'express';
import Meal from '../models/Meal.js';

const routes = express.Router();

routes.post("/fooditem", async (req, res) => {
    try {
        const meal = await Meal.create({
            ...req.body
        })

        res.send(meal);
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
})

routes.patch("/fooditem/:id", async (req, res) => {
    try {
        const id = req.params.id
        const meal = await Meal.findByIdAndUpdate(id,
            {
                ...req.body
            })

        res.send(meal);
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
})