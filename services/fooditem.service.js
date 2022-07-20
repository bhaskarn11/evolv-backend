import express from 'express';
import FoodItem from '../models/FoodItem.js';

const routes = express.Router();

routes.post("/fooditem", async (req, res) => {
    try {
        const fooditem = await FoodItem.create({
            ...req.body
        })

        res.send(fooditem);
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
})