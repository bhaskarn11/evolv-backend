import mongoose from 'mongoose';


const UnitTypes = ["ml", "liter", "kg", "g", "item"]

const FoodItem = mongoose.Schema({
    name: { type: String, required: true },
    calories: { type: Number, default: 0},
    protein: { type: Number, default: 0},
    carb: { type: Number, default: 0},
    fat: { type: Number, default: 0},
    acceptedUnits: {type: [String], enum: UnitTypes},
    itemWeight: { type: Number, default: 0},
})

export default mongoose.model("fooditems", FoodItem);