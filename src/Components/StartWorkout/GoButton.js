import { useHistory } from "react-router-dom";


function GoButton({workoutType, selectedWorkout = null, workoutList = null}){
    const history = useHistory()

    const startWorkoutFunc = () => {
        if (workoutType === 'aiWorkout'){
            alert("Starting AI Workout")
        
        }else if (workoutType === 'freeWorkout'){
            alert("Starting free workout")
        
        }else if (workoutType === 'savedWorkout'){
            var exercises = Object.entries(workoutList).filter(([key, value]) => {
                if (key === selectedWorkout){
                    return true;
                }else{
                    return false;
                }
            })

            console.log(workoutList)

            window.localStorage.setItem('exerciseList', exercises)
            history.push('/users/workout/in-progress')
        }
    }

    return (
        <div className = 'text-center' style = {{'marginTop' : '5vh'}}>
            <button onClick = {startWorkoutFunc} className = 'go-button-workout'>
                <p style = {{'fontSize' : '4vh', 'color' : 'white', 'marginTop' : '2vh'}}>Start Workout</p>
            </button>
        </div>
    )
}

export default GoButton
