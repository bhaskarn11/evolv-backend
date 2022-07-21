import FoodItem from '../models/FoodItem.js';

export async function createFoodItem(data) {
    try {
        const fooditem = await FoodItem.create({
            ...data
        })

        return fooditem;
    } catch (error) {
        throw error;
    }
}