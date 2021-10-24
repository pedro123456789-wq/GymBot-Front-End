import IconButton from "../Dashboard/IconButton"
import LargeButton from "../LandingPage/LargeButton"
import AlertBox from '../Sign In/AlertBox'
import { AiFillCloseCircle } from "react-icons/ai"
import React, { useState } from 'react';



function AddExercisePopUp({ togglePopUp, exerciseList, appendExercise }){
    const [showError, toggleError] = useState(false)
    const [errorMessage, changeMessage] = useState()

    const addExercise = () => {
        const exerciseName = document.getElementById('exercise-name').value
        const exerciseRepetitions = document.getElementById('exercise-repetions').value
        const exerciseMinutes = parseInt(document.getElementById('exercise-minutes').value)
        const exerciseSeconds = parseInt(document.getElementById('exercise-seconds').value)

        console.log(exerciseMinutes)

        if (exerciseName === ''){
            toggleError(true)
            changeMessage('Please enter an exercise name')
        }else if (exerciseRepetitions === ''){
            toggleError(true)
            changeMessage('Please enter the number of repetitions')
        }else if (isNaN(exerciseMinutes) || isNaN(exerciseSeconds)){
            toggleError(true)
            changeMessage('Please enter the complete duration of the exercise')
        }else if (exerciseSeconds >= 60){
            toggleError(true)
            changeMessage('Please enter a valid number of seconds')
        }else{
            const newList = [[exerciseName, (exerciseMinutes * 60) + exerciseSeconds, exerciseRepetitions]].concat(exerciseList)
            appendExercise(newList)
            togglePopUp(false)
        }
    }


    return (
        <div className = 'pop-up-div'>
            {showError && <AlertBox text = {errorMessage} />}
            
            <ul style = {{}}>
                <li style = {{'display' : 'inline-block'}}>
                    <h1 className = 'form-text mr-5' style = {{'marginLeft' : '16vw'}}>Add Exercise</h1>
                </li>

                <li style = {{'display' : 'inline-block', 'marginLeft' : '10vw', 'fontSize' : '4vh'}}>
                    <button onClick = {() => togglePopUp(false)} style = {{'background' : 'transparent', 'border' : 'none'}}><IconButton icon = {<AiFillCloseCircle />} icon_color = {'#474747'} hover_color = 'white'/></button>
                </li>
            </ul>
            

            <ul>
                <li style = {{'display' : 'inline-block'}}>
                    <p className = 'form-text' style = {{'fontSize' : '4vh'}}>Exercise Name: </p>
                </li>

                <li style = {{'display' : 'inline-block', 'marginLeft' : '2vw'}}>
                    <input className = 'form-input' type = 'text' id = 'exercise-name'></input>
                </li>
            </ul>

            <ul>
                <li style = {{'display' : 'inline-block'}}>
                    <p className = 'form-text' style = {{'fontSize' : '4vh'}}>Repetitions: </p>
                </li>

                <li style = {{'display' : 'inline-block', 'marginLeft' : '5vw'}}>
                    <input className = 'form-input' type = 'number' min = '1' max = '100' style = {{'width' : '8vw', 'textAlign' : 'center'}} id = 'exercise-repetions'></input>
                </li>
            </ul>

            <ul>
                <li style = {{'display' : 'inline-block'}}>
                    <p className = 'form-text' style = {{'fontSize' : '4vh'}}>Duration: </p>
                </li>

                <li style = {{'display' : 'inline-block', 'marginLeft' : '8vw'}}>
                    <input className = 'form-input' type = 'number' min = '1' max = '1000' style = {{'width' : '5vw', 'textAlign' : 'center'}} id = 'exercise-minutes'></input>
                </li>

                <li style = {{'display' : 'inline-block', 'marginRight' : '5vw'}}>
                    <p className = 'form-text' style = {{'font-size' : '4vh'}}>:</p>
                </li>

                <li style = {{'display' : 'inline-block'}}>
                    <input className = 'form-input' type = 'number' style = {{'width' : '5vw', 'textAlign' : 'center'}} min = '1' max = '60' id = 'exercise-seconds'></input>
                </li>
            </ul>
            
            <div className = 'text-center'>
                <button style = {{'background' : 'transparent', 'border' : 'none'}} onClick = {() => addExercise()}><LargeButton text = 'Add' /></button>
            </div>
        </div>
    )
}

export default AddExercisePopUp
