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


export const updateUserMealPlan = (id, mealPlan) => {
    try {
        let user = null;
        User.updateOne({id}, {
            $push: { mealPlan: mealPlan}
        }, (err, res) => {
            if (err) {
                throw err
            }
            // console.log(res);
            user = res
        })
        // console.log(m);
        return user
    } catch (error) {
        throw error;
    }
}
