import express from 'express';

import { createUser, updateUserMealPlan } from '../services/users.service.js';

const routes = express.Router();


/* 
    creates a user

    example request payload:

    {
        "name": "John Smith",
        "calorieRequirement": 23,
        "mealPlans": [
            {
                "date": "2022-07-21T09:44:53.122Z",
                "meal": "62d92f67d28919a7ebd381b8"
            }
        ]
    }

*/
routes.post("/users", async (req, res, next) => {
    try {
        const user = await createUser(req.body);
        res.send(user);
    } catch (error) {
        const err = new Error("Internal server error");
        next(err)
    }
})



/* 
    updates the meal plan for a user

    example request payload:

    {
        "mealPlan": [
            {
                "date": "2022-07-21T09:44:53.122Z",
                "meal": "62d92f67d28919a7ebd381b8"
            }
        ]
    }

*/
routes.patch("/users/:userId/mealplan", async (req, res, next) => {
    try {

        const { userId } = req.params;
        const { mealPlan } = req.body;
        
        const user = updateUserMealPlan(userId, mealPlan)
        // const user = await User.findOne({id: userId}).populate("mealPlan.meal")
        res.send(user);
    } catch (error) {
        // console.log(error);
        const err = new Error("Internal server error");
        next(err)
    }
})

export default routes;