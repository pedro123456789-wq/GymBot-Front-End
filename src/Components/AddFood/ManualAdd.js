import InputField from "../FitnessPredictor/InputField"
import AlertBox from "../Sign In/AlertBox"
import { AiFillPlusCircle } from "react-icons/ai"
import React, {useState} from 'react'
import { AddFoodFunc } from "./AddFoodFunc"
import { useHistory } from 'react-router-dom'


//add validation checking
//develop barcode scanner for food

function ManualAdd({ api_url }){
    const history = useHistory()
    const [isError, toggleError] = useState(false)

    const addFood = () => {
        //get data from entries
        const foodName = document.getElementById('Food Name: ').value  
        const calories = document.getElementById('Calories: ').value  
        const protein = document.getElementById('Protein (g): ').value
        const fat = document.getElementById('Fat (g): ').value
        const carbs = document.getElementById('Carbohydrates (g): ').value

        if (foodName === '' || calories === '' || protein === '' || fat === '' || carbs === ''){
            toggleError(true)
            return 
        }
        
        AddFoodFunc(foodName, calories, protein, fat, carbs, api_url, () => history.push('/users/dashboard'), () => toggleError(true))
    }


    return (
        <div>
            {isError &&
                <div className = 'text-center' style = {{'width' : '50vw', 'marginLeft' : '25vw', 'marginBottom' : '5vh'}}>
                    <AlertBox text = 'Please enter valid values for all inputs' />
                </div> 
            }

            <div style = {{'marginLeft' : '19vw'}}>
                <InputField inputName = 'Food Name: ' marginLeft = {20} inputType = 'text'/>
            </div>

            <div style = {{'marginLeft' : '19vw'}}>
                <InputField inputName = 'Calories: ' marginLeft = {23}/>
            </div>

            <div style = {{'marginLeft' : '19vw'}}>
                <InputField inputName = 'Protein (g): ' marginLeft = {20}/>
            </div>

            <div style = {{'marginLeft' : '19vw'}}>
                <InputField inputName = 'Fat (g): ' marginRight = {10} marginLeft = {24.5}/>
            </div>

            <div style = {{'marginLeft' : '19vw'}}>
                <InputField inputName = 'Carbohydrates (g): ' marginRight = {10} marginLeft = {12}/>
            </div>

            <div className = 'text-center mt-5 pb-5'>
                <button className = 'sign-in-button text-center' onClick = {addFood}>
                    <AiFillPlusCircle />
                </button>
            </div>
        </div>
    )
}

export default ManualAdd
