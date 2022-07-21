import FoodItem from '../models/FoodItem.js'


async function mealOptimization(mealCalorie) {
    try {
        const foodList = await FoodItem.find({})
        const recfoodList = []
        foodList.forEach(element => {
            let quantity = 0;
            while (mealCalorie >= element.calories &&
                checkConstraint(element.protein, mealCalorie, quantity)) {
                if (quantity <= 5 && quantity >= 2) break
                quantity += 1

            }
            if (quantity !== 0 && recfoodList.length <= 5) {
                const { protein, fat, name, carb, calories } = element
                recfoodList.push({
                    protein,
                    fat,
                    name,
                    carb,
                    calories,
                    quantity: quantity
                })
            }
        });
        
        return recfoodList
    } catch (error) {
        throw error
    }
}

const checkConstraint = (protein, mealCalorie, quantity) => {
    let proteinEq = protein * 4
    if (quantity > 0) {
        proteinEq = protein * 4 * quantity 
    }
    if (proteinEq <= (mealCalorie * 0.3) && proteinEq >= (mealCalorie * 0.2)) return true
    return false
}



export default mealOptimization