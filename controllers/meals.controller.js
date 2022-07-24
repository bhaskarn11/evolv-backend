import express from 'express';
import { createMeal, updateMeal } from '../services/meal.service.js';
import mealOptimization from '../services/mealOptimization.service.js';

const router = express.Router();


/* 
    creats a meal given the id of food items

    request payload example:
    {
        "name": "Rice with Fish",
        "category": "Lunch",
        "foodItems": [
            "62d928e87aebdb85bdf7d006",
            "62d928727aebdb85bdf7d002"
        ]
    }
*/
router.post("/meals", async (req, res, next) => {
    try {
        const meal = await createMeal(req.body)
        res.send(meal);
    } catch (error) {
        const err = new Error("Internal server error");
        next(err)
    }
})

/* 
    updates a meal given the id of the meal

    request payload example:

    {
        "name": "Rice with Fiiish",
        "category": "Dinner"
        "foodItems": [
            "8267563hhjhdt63v",
            ....
        ]
    }

*/

router.patch("/meals/:id", async (req, res, next) => {
    try {
        const id = req.params.id
        console.log(id);
        const meal = await updateMeal(id, req.body)
        res.send(meal);
    } catch (error) {
        const err = new Error("Internal server error");
        next(err)
    }
})


/* 
    meal optimization

    request payload example:

    {
        "mealCalorie": 2000
    }

*/
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