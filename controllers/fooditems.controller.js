import express from 'express';

import { createFoodItem } from '../services/fooditem.service.js'
const router = express.Router();


/*
    add a food item 

    example request payoad: 

    {
        "name": "Oranges",
        "calories": 35,
        "protein": 1,
        "fat": 0,
        "carb": 9,
        "acceptedUnits": ["g"]
    }
*/

router.post("/fooditem",
    async (req, res, next) => {
        try {
            
            const fooditem = await createFoodItem(req.body)

            res.send(fooditem);
        } catch (error) {
            const err = new Error("Internal server error");
            next(err)
        }
    })

export default router;