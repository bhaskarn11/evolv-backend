import express from 'express';

import { createUser, updateUserMealPlan } from '../services/users.service.js';

const routes = express.Router();

routes.post("/users", async (req, res, next) => {
    try {
        const user = await createUser(req.body);
        res.send(user);
    } catch (error) {
        const err = new Error("Internal server error");
        next(err)
    }
})

routes.patch("/users/:userId/mealplan", async (req, res, next) => {
    try {

        const { userId } = req.params;
        const { mealId, mealPlan } = req.body;
        
        const user = updateUserMealPlan(userId, mealPlan)
        // const user = await User.findOne({id: userId}).populate("mealPlan.meal")
        res.send(user);
    } catch (error) {
        console.log(error);
        const err = new Error("Internal server error");
        next(err)
    }
})

export default routes;