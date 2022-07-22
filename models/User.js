import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const MealPlan = {
    date: Date,
    meal: {
        type: Schema.Types.ObjectId,
        ref: "meals"
    }
}

const User = mongoose.Schema({
    name: {type: String, required: true}, 
    calorieRequirement: { type: Number, required: true },
    mealPlan: [{type: MealPlan}]
})

export default model("users", User);