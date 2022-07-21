import FoodItem from '../models/FoodItem.js';
import Meal from '../models/Meal.js';

export async function createMeal(foodItemId, data) {
    try {
        const fooditem = await FoodItem.findOne({id: foodItemId});
        if (!fooditem) return null;
        const meal = await Meal.create({
            ...data
        })

        return meal;
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
}

export async function updateMeal(data) {
    try {
        const id = req.params.id
        const meal = await Meal.findByIdAndUpdate(id,
            {
                ...data
            })

        return meal;
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
}