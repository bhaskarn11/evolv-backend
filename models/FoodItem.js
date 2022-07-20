import mongoose from 'mongoose';
const { Schema, model } = mongoose;


const FoodItem = Schema({
    name: { type: String, required: true },
    calories: Number,
    protein: Number,
    carb: Number,
    fat: Number,
    itemWeight: Number,
})

export default model(Meal, "fooditems");