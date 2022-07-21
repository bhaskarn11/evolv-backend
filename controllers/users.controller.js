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

routes.patch("/users/:id/mealplan", async (req, res, next) => {
    try {

        const userId = req.params;
        const {mealId, mealPlan} = req.body;
        const user = await updateUserMealPlan(userId, mealPlan)

        res.send(user);
    } catch (error) {
        const err = new Error("Internal server error");
        next(err)
    }
})

export default routes;