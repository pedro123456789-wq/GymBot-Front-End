import ModeButton from "./ModeButton"
import SideBar from "../Dashboard/SideBar"
import GoButton from "./GoButton";
import React, { useState } from 'react';



//workout modes:
    //-> do saved workouts - contains visualizer and voice assistant
    //-> do free workout - track progress with speech recognition
    //-> do AI workout - track repetitions with convulutional neural network model



function StartWorkoutPage({ workoutList }){
    const [workoutMode, changeMode] = useState('');
    const [selectedWorkout, changeSelected] = useState('');

    return (
        <div style = {{'background' : 'linear-gradient(black, #545c56)', 'height' : workoutMode === '' ? '100vh' : '150vh', 'width' : '100vw'}}>
            <h1 className = 'form-title text-center'>Select Workout Mode</h1>

            <SideBar isTransparent = {true}/>

            <ModeButton workoutMode = 'Saved Workout' backgroundColor = 'red' selectedMode = {workoutMode} changeMode = {changeMode}/>
            <ModeButton workoutMode = 'Free Workout' backgroundColor = 'blue' selectedMode = {workoutMode} changeMode = {changeMode}/>
            <ModeButton workoutMode = 'AI Trainer Workout' backgroundColor = 'purple' selectedMode = {workoutMode} changeMode = {changeMode}/>


            {workoutMode === 'Free Workout' ?
                <div style = {{'marginTop' : '20vh'}}>
                    <p className = 'workout-description'>Do any exercise combination you want without restrictions <br></br> and track your progress on the go with speech recognition</p>
                    <GoButton workoutType = 'freeWorkout' callBack = {null} />
                </div>

            : workoutMode === 'AI Trainer Workout' ?
                <div style = {{'marginTop' : '20vh'}}>
                    <p className = 'workout-description'>Automatically count exercise repetitions, track form <br></br> and get smart workout suggestions</p>
                    <GoButton workoutType = 'aiWorkout' callBack = {null}/>
                </div>

            : workoutMode === 'Saved Workout' &&
                <>
                    <div className = 'select-workout-div text-center' >
                        <p className = 'form-title'>Select Workout </p>                        
                        
                        {
                            Object.entries(workoutList).map(([key, value]) => {
                                return (<div className = 'mt-2' key = {key}>
                                            <button className = {`select-workout-button ${selectedWorkout === key && 'selected'}`} 
                                                    onClick = {() => changeSelected(key)}>
                                                {key}
                                            </button>
                                        </div>)
                            })
                        }
                    </div>

                    <GoButton workoutType = 'savedWorkout' selectedWorkout = {selectedWorkout} workoutList = {workoutList}/>
                </>
            }
        </div>
    )
}

export default StartWorkoutPage
