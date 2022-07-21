import express from 'express';
import User from '../models/User.js';

const routes = express.Router();

routes.post("/users", async (req, res, next) => {
    try {
        const { name, calorieRequirement, mealPlans} = req.body;
        if(!mealPlans) {
            mealPlans = []
        }
        const user = await User.create({
            name: name,
            calorieRequirement: calorieRequirement,
            mealPlans: mealPlans
        })

        res.send(user);
    } catch (error) {
        const err = new Error("Internal server error");
        next(err)
    }
})

routes.patch("/users/:id/mealplan", async (req, res, next) => {
    try {

        const userId = req.params;
        const mealId = req.body;
        const user = await User.findByIdAndUpdate(id,{
            ...req.body
        })

        res.send(user);
    } catch (error) {
        const err = new Error("Internal server error");
        next(err)
    }
})

export default routes;