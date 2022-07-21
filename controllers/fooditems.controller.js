import express from 'express';
import FoodItem from '../models/FoodItem.js';

const routes = express.Router();

routes.post("/fooditem", async (req, res, next) => {
    try {
        const fooditem = await FoodItem.create({
            ...req.body
        })

        res.send(fooditem);
    } catch (error) {
        const err = new Error("Internal server error");
        next(err)
    }
})

export default routes;