import mongoose from 'mongoose';


const FoodItem = mongoose.Schema({
    name: { type: String, required: true },
    calorie: Number,
    protein: Number,
    carb: Number,
    fat: Number,
    itemWeight: Number,
})

export default mongoose.model("fooditems", FoodItem);