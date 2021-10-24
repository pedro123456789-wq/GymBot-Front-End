import React, { useEffect, useState } from 'react';
import WorkoutCompleted from './WorkoutCompleted';
import WorkoutTracker from './WorkoutTracker';

//TODO:
    //Add pause, resume and quit button on workout tracker page
    //add functionality to delete workouts on manage workouts page

function WorkoutRunnerPage(){
    const exerciseList = window.localStorage.getItem('exerciseList').split(',')
    const [secondsRemaining, setSeconds] = useState(5)
    const [exerciseIndex, changeIndex] = useState(-1)
    const [currentExercise, changeExercise] = useState(`Starting ${exerciseList[0]}`)
    const [isWorkoutCompleted, toggleFlag] = useState(false)
    const [isPaused, togglePause] = useState(false)


    const getWorkoutLength = (startingIndex) => {
        var totalLength = 0;
        
        for (var i = (3 * startingIndex) + 2; i < exerciseList.length; i += 3){
            totalLength += parseInt(exerciseList[i])
        }

        return totalLength
    }


    const getTotalRepetitions = () => {
        var totalRepetitions = 0

        for (var i = 3; i < exerciseList.length; i += 3){
            totalRepetitions += parseInt(exerciseList[i])
        }

        return totalRepetitions
    }


    const convertSeconds = (seconds) => {
        var formatedMinutes = Math.floor(seconds / 60).toString()
        var formatedSeconds = (seconds - (parseInt(formatedMinutes) * 60)).toString()

        if (formatedMinutes.length === 1){
            formatedMinutes = '0' + formatedMinutes
        }

        if (formatedSeconds.length === 1){
            formatedSeconds = '0' + formatedSeconds
        }

        return `${formatedMinutes} : ${formatedSeconds}`
    }


    useEffect(() => {
        var speechSynthesizer = new SpeechSynthesisUtterance();
        speechSynthesizer.voice = window.speechSynthesis.getVoices()[3]
        speechSynthesizer.pitch = 0.3


        if (exerciseIndex === -1){
            speechSynthesizer.text = currentExercise
            window.speechSynthesis.speak(speechSynthesizer)
            changeIndex(0)
        }
        

        if (secondsRemaining === 0){
            if (exerciseIndex < Math.floor((exerciseList.length - 1) / 3)){
                setTimeout(() => {
                    setSeconds(exerciseList[(exerciseIndex * 3) + 2])
                    changeExercise(exerciseList[(exerciseIndex * 3) + 1])
                    const repetions = exerciseList[(exerciseIndex * 3) + 3]

                    speechSynthesizer.text = `Starting ${repetions} repetitions of ${exerciseList[(exerciseIndex * 3) + 1]}`
                    window.speechSynthesis.speak(speechSynthesizer)

                    changeIndex(exerciseIndex + 1)
                }, 1000)
                return
            
            }else{
                if (!isWorkoutCompleted){
                    speechSynthesizer.text = 'Workout Completed. Well Done!'
                    window.speechSynthesis.speak(speechSynthesizer)
                    toggleFlag(true)
                }
                return
            }
        }

        setTimeout(() => {
            if (!isPaused){
                setSeconds(secondsRemaining - 1)
            }
        }, 1000)
    }, [exerciseIndex, secondsRemaining, currentExercise, exerciseList, isWorkoutCompleted, isPaused])


    return (
        <div className = 'dashboard-div' style = {{'background' : 'linear-gradient(black, #1914a6, black)'}}>
            {(!isWorkoutCompleted) ? 
                <WorkoutTracker exerciseIndex = {exerciseIndex} 
                                secondsRemaining = {secondsRemaining} 
                                currentExercise = {currentExercise} 
                                exerciseList = {exerciseList} 
                                isWorkoutCompleted = {isWorkoutCompleted}
                                getWorkoutLength = {getWorkoutLength}
                                convertSeconds = {convertSeconds}
                                togglePause = {togglePause}
                                isPaused = {isPaused}
                /> 
                                    : 
                <WorkoutCompleted workoutRepetitions = {getTotalRepetitions()} 
                                  workoutLength = {convertSeconds(getWorkoutLength(0))}
                                  exerciseList = {exerciseList}
                />
            }
        </div>
    )
}

export default WorkoutRunnerPage
