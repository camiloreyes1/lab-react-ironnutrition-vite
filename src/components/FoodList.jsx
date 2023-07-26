import { useState } from "react";
import FoodBox from "./FoodBox";
import foodsJson from "../foods.json";
import AddFoodForm from "./AddFoodForm";

function FoodList() {
    const [allFoods ,setFoodsList] =useState(foodsJson)
    const deleteFunction = (id)=>{
        const updatedFood = allFoods.filter((f)=>f.id!=id)
        setFoodsList(updatedFood)
    }

    
    return (
      <div>
        <h1>LAB | React IronNutrition</h1>

        <AddFoodForm/>

        {allFoods.map((f) => (
              <FoodBox
                food={f}
                deleteFunction={deleteFunction}
              />
            ))}
      </div>
    );
  }
export default FoodList;