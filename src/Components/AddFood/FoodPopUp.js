import { AddFoodFunc } from "./AddFoodFunc"
import { AiFillCloseCircle } from "react-icons/ai"
import { AiFillPlusCircle } from "react-icons/ai"
import IconButton from "../Dashboard/IconButton"
import { useHistory } from 'react-router-dom'



//add serving size option
//add colour code to signal low, high or medium amounts of nutrients


function FoodPopUp({ foodName, protein, carbs, fat, calories, servingSize, api_url, togglePopUp }){
    const history = useHistory()

    const storeRecord = () => {
        AddFoodFunc(foodName, calories.split(' ')[0], protein.split(' ')[0], carbs.split(' ')[0], fat.split(' ')[0], api_url, () => history.push('/users/dashboard'), () => {console.log('error')})
    }


    return (
        <div className = 'food-info-pop-up'>
            <ul>
                <li style = {{'display' : 'inline-block', 'marginLeft' : '10vw'}}>
                    <h1 className = 'form-title text-center' style = {{'color' : '#717a99'}}>{foodName} ({servingSize})</h1>
                </li>

                <li style = {{'display' : 'inline-block', 'marginLeft' : '5vw'}}>
                    <button onClick = {() => togglePopUp(false)} 
                            style = {{'background' : 'transparent', 'border' : 'none'}}>
                        <IconButton icon = {<AiFillCloseCircle />} icon_color = {'#474747'} hover_color = 'white' icon_size = '3vw'/>
                    </button>
                
                </li>
            </ul>

            <div style = {{'marginLeft' : '20vw'}}>                
                <p className = 'form-text'>Calories: {calories}</p>
                <p className = 'form-text'>Protein: {protein}</p>
                <p className = 'form-text'>Carbohydrates: {carbs}</p>
                <p className = 'form-text'>Fat: {fat}</p>
            </div>

            <div className = 'text-center mt-5 pb-5'>
                <button className = 'sign-in-button text-center' onClick = {storeRecord}>
                    <AiFillPlusCircle />
                </button>
            </div>
        </div>
    )
}

export default FoodPopUp
