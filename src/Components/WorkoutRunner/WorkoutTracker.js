import { AiOutlinePauseCircle, AiOutlinePlayCircle, AiOutlineStop } from "react-icons/ai";
import {Link} from 'react-router-dom'



function WorkoutTracker({ exerciseIndex, 
                          secondsRemaining, 
                          currentExercise, 
                          exerciseList, 
                          isWorkoutCompleted, 
                          getWorkoutLength, 
                          convertSeconds, 
                          togglePause, 
                          isPaused, 
                          speechSyntehsizer
                        }){


    const speechSynthesizer = new SpeechSynthesisUtterance()
    speechSynthesizer.voice = window.speechSynthesis.getVoices()[3]
    speechSynthesizer.pitch = 0.3


    return (
        <div>
            <div className = 'workout-progress-div-under'>
            </div>


            {(exerciseIndex - 1) > 0 && 
                <div className = 'workout-progress-div-over' style = {{'--width' : (!isWorkoutCompleted) ? Math.floor(((getWorkoutLength(0) - getWorkoutLength(exerciseIndex - 1)) / getWorkoutLength(0)) * 80) + 'vw' : '80vw'}}>
                </div>
            }


            <h1 className = 'countdown-number'>{ convertSeconds(secondsRemaining) }</h1>
            <h2 className = 'current-exercise'>{ currentExercise }</h2>
            

            <ul style = {{'paddingTop' : '2vh'}}>
                <li style = {{'display' : 'inline-block'}}>
                    <button className = {`pause-button ${isPaused && 'resume'}`} 
                            onClick = {() => {
                                            togglePause(!isPaused)
                                            speechSynthesizer.text = `${isPaused ? 'Resuming' : 'Pausing'} Workout`
                                            window.speechSynthesis.speak(speechSynthesizer)
                                        }
                            }>{isPaused ? <AiOutlinePlayCircle /> : <AiOutlinePauseCircle />}
                    </button>
                </li>
                

                <li style = {{'display' : 'inline-block'}}>
                    <Link to = '/users/dashboard'>
                        <button className = 'stop-button' 
                                onClick = {() => {
                                                    togglePause(!isPaused)
                                                    speechSynthesizer.text = 'Ending Workout'
                                                    window.speechSynthesis.speak(speechSynthesizer)
                                                 }
                                          }>
                            <AiOutlineStop />
                        </button>
                    </Link>
                </li>
            </ul>


            <div className = 'exercise-progress-div-under'>
            </div>


            <div className = 'exercise-progress-div-over' style = {{'--width' : 
                (exerciseIndex > 0) ? Math.floor((((exerciseList[((exerciseIndex - 1) * 3) + 2] - secondsRemaining) / exerciseList[((exerciseIndex - 1)* 3) + 2]) * 60)) + 'vw' :
                Math.floor(((5 - secondsRemaining) / 5) * 60) + 'vw'}}>
            </div>
        </div>
    )
}

export default WorkoutTracker
