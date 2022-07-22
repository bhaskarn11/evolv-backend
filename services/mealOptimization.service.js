import FoodItem from '../models/FoodItem.js'


async function mealOptimization(mealCalorie) {
    try {
        const foodList = await FoodItem.find({}) // fetches all fooditems from the datasource
        const recfoodList = []
        let totalCal = 0;
        for (const i in foodList) {
            let quantity = 0;
            let calories = 0
            let protein = 0
            
            do {
                totalCal += foodList[i].calories;
                calories += foodList[i].calories
                protein += foodList[i].protein
                quantity += 1
            } while (totalCal < mealCalorie && checkConstraint(protein, calories, foodList[i].calories));
            
            if (totalCal > mealCalorie) break
            
            
            if (quantity !== 0 && recfoodList.length < 5) {
                
                const { name } = foodList[i]
                recfoodList.push({
                    protein,
                    fat: foodList[i].fat * quantity,
                    name,
                    carb: foodList[i].carb * quantity,
                    calories,
                    quantity: quantity
                })
            }
        };

        return recfoodList
    } catch (error) {
        throw error
    }
}

const checkConstraint = (protein, calories, itemCal) => {
    let proteinEq = protein * 4
    let calDiff = calories - itemCal
    if ((calDiff >= -100 && calDiff <= 100) && (proteinEq <= (calories * 0.3) && proteinEq >= (calories * 0.2))) return true
    return false
}



export default mealOptimization