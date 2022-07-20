import mongoose from 'mongoose';

const User = mongoose.Schema({
    name: {type: String, required: true}, 
    calorieRequirement: { type: String, required: true },
    mealPlan: { type: Array }
})

export default mongoose.model(User, "users");