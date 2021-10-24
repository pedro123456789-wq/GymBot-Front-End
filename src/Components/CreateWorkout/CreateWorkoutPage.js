import { IoIosAdd } from "react-icons/io"
import IconButton from "../Dashboard/IconButton";
import LargeButton from "../LandingPage/LargeButton";
import AddExercisePopUp from "./AddExercisePopUp";
import AlertBox from "../Sign In/AlertBox";
import SideBar from "../Dashboard/SideBar";
import { saveWorkout } from "./SaveWorkout";
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";



function CreateWorkoutPage({ api_url }){
    const [exerciseList, appendExercise] = useState([]);
    const [showPopUp, togglePopUp] = useState(false);
    const [showError, toggleError] = useState(false);
    const [errorMessage, changeMessage] = useState('');
    const history = useHistory();


    const getWorkoutLength = () => {
        var workoutLength = 0;
        exerciseList.forEach((exercise) => {workoutLength += parseInt(exercise[1])})
        
        var workoutMinutes = Math.floor(workoutLength / 60).toString()
        var workoutSeconds = (workoutLength - (workoutMinutes * 60)).toString()

        if (workoutMinutes.length === 1){
            workoutMinutes = '0' + workoutMinutes
        }

        if (workoutSeconds.length === 1){
            workoutSeconds = '0' + workoutSeconds
        }

        return `${workoutMinutes} : ${workoutSeconds}`
    }



    const validateInput = (api_url, exerciseList, history) => {
        const workoutName = document.getElementById('workout-name').value

        if (workoutName === ''){
            toggleError(true)
            changeMessage('Please enter a workout name')
        }else if (exerciseList.length === 0){
            toggleError(true)
            changeMessage('You must add at least one exercise')
        }else{
            saveWorkout(api_url, exerciseList, history)
        }
    }


    return (
        <div className = 'dashboard-div' style = {{'height' : '110vh'}}>
            <SideBar isTransparent = {true}/>
            
            <div style = {{'filter' : showPopUp ? `blur(2px)` : 'none'}}>
                <h1 className = 'text-center form-title pt-3'>Create Workout</h1>

                <ul>
                    <li style = {{'display' : 'inline-block', 'marginLeft' : '18vw'}}>
                        <p className = 'form-text pt-3'>Workout Name: </p>
                    </li>

                    <li style = {{'display' : 'inline-block', 'marginLeft' : '10vw'}}>
                        <input type = 'text' className = 'form-input' id = 'workout-name'></input>
                    </li>
                </ul>

                <ul>
                    <li style = {{'display' : 'inline-block', 'marginLeft' : '25vw'}}>
                        <p className = 'form-text'>{`Duration: ${getWorkoutLength()}`}</p>
                    </li>

                    <li style = {{'display' : 'inline-block'}}>
                        <p className = 'form-text'>{`Exercises: ${exerciseList.length}`}</p>
                    </li>
                </ul>

                {showError && 
                    <div style = {{'width' : '50vw', 'marginLeft' : '25vw', 'marginTop' : '10vh'}}>
                        <AlertBox text = {errorMessage} />
                    </div>
                }

                <div className = 'text-center'>
                    <button style = {{'background' : 'transparent', 'border' : 'none'}} onClick = {() => togglePopUp(true)}><IconButton icon = {<IoIosAdd />} icon_size  = '20vh' font_size = '3vh' text = 'Add Exercise' icon_color = '#00f285' hover_color = 'white'/></button>
                </div>

                <div className = 'pb-3 text-center'>
                    <button onClick = {() => validateInput(api_url, exerciseList, history)} style = {{'background' : 'transparent', 'border' : 'none'}}><LargeButton text = 'Save Workout' /></button>
                </div>
            </div>

            {showPopUp && <AddExercisePopUp togglePopUp = {togglePopUp} appendExercise = {appendExercise} exerciseList = {exerciseList}/>}
        </div>
    )
}


export default CreateWorkoutPage
