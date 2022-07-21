import User from '../models/User.js';

export const createUser = async (data) => {
    try {
        const { mealPlan, name, calorieRequirement } = data
        if (!mealPlan) {
            mealPlan = []
        }
        const user = await User.create({
            name: name,
            calorieRequirement: calorieRequirement,
            mealPlans: mealPlan
        })

        return user;
    } catch (error) {
        throw error;
    }
}


export const updateUserMealPlan = async (id, mealPlan) => {
    try {
        const user = await User.findByIdAndUpdate(id, {
            mealPlan: mealPlan
        })
        return user
    } catch (error) {
        throw error;
    }
}
