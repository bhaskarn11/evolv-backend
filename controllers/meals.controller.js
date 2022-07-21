import express from 'express';
import { createMeal, updateMeal } from '../services/meal.service.js';
import mealOptimization from '../services/mealOptimization.service.js';

const router = express.Router();

router.post("/meals", async (req, res, next) => {
    try {
        const meal = await createMeal(req.body)
        res.send(meal);
    } catch (error) {
        const err = new Error("Internal server error");
        next(err)
    }
})

router.patch("/meals/:id", async (req, res, next) => {
    try {
        const id = req.params.id
        const meal = await updateMeal(id, req.body)
        res.send(meal);
    } catch (error) {
        const err = new Error("Internal server error");
        next(err)
    }
})

router.get("/meals/recommend", async (req, res, next) => {
    try {
        const { mealCalorie } = req.body
        res.send(await mealOptimization(mealCalorie))
    } catch (error) {
        // console.log(error);
        const err = new Error("Internal server error");
        next(err)
    }
})

export default router;