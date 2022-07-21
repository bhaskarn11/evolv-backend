import FoodItem from '../models/FoodItem.js';

export async function createFoodItem(data) {
    try {
        const fooditem = await FoodItem.create({
            ...req.body
        })

        return fooditem;
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
}