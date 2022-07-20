import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const MealType = {
    Breakfast: "Breakfast", Lunch: "Lunch", Evening: "Evening", Snack: "Snack", Dinner: "Dinner"
}

const Meal = Schema({
    name: { type: String, required: true },
    foodItems: { type: Array },
    category: { type: String }
})

export default model(Meal, "meals");