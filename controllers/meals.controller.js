import express, { Router } from 'express';
import Meal from '../models/Meal.js';

const router = express.Router();

router.post("/fooditem", async (req, res) => {
    try {
        const meal = await Meal.create({
            ...req.body
        })

        res.send(meal);
    } catch (error) {
        const err = new Error("Internal server error");
        next(err)
    }
})

router.patch("/fooditem/:id", async (req, res) => {
    try {
        const id = req.params.id
        const meal = await Meal.findByIdAndUpdate(id,
            {
                ...req.body
            })

        res.send(meal);
    } catch (error) {
        const err = new Error("Internal server error");
        next(err)
    }
})

export default router;