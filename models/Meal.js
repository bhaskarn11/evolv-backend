import mongoose from 'mongoose';
const { Schema, model } = mongoose;
export const MealType = ["Breakfast", "Lunch", "Evening", "Snack", "Dinner"]

const Meal = Schema({
    name: { type: String, required: true },
    foodItems: [{type: Schema.Types.ObjectId, ref: "fooditems"}],
    category: { type: String, enum: MealType }
})

export default model("meals", Meal);