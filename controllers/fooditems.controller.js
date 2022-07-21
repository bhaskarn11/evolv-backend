import express from 'express';
// import { validationResult, check } from 'express-validator'

import { createFoodItem } from '../services/fooditem.service.js'
const router = express.Router();

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