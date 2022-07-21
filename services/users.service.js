import User from '../models/User.js';

export const createUser = async (data) => {
    try {
        const user = await User.create({
            ...data
        })

        return user;
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
}


export const updateUserMealPlan = async (data) => {
    try {
        
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
}
