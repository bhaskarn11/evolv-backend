import Meal from '../models/Meal.js';

export async function createMeal(data) {
    try {
        const meal = await Meal.create({
            ...data
        })

        return meal;
    } catch (error) {
        throw error
    }
}

export async function updateMeal(id, data) {
    try {
        const doc = await Meal.findOneAndUpdate({id},
            {
                ...data
            })
        return doc;
    } catch (error) {
        throw error;
    }
}
