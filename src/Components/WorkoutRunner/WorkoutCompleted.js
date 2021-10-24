import IconButton from "../Dashboard/IconButton";
import { IoIosDoneAll } from "react-icons/io";



function WorkoutCompleted({ workoutLength, workoutRepetitions, exerciseList, }){
    return (
        <div style = {{'paddingTop' : '10vh'}}>
            <h1 className = 'current-exercise'>Workout Completed</h1>
            
            <div style = {{'marginLeft' : '35vw', 'marginTop' : '6vh'}}>
                <p className = 'form-text' style = {{'color' : 'gray'}}>Duration: {workoutLength}</p>
                <p className = 'form-text' style = {{'color' : 'gray'}}>Repetitions: {workoutRepetitions}</p>
                <p className = 'form-text' style = {{'color' : 'gray'}}>Exercises: {(exerciseList.length - 1) / 3}</p>

                <div style = {{'marginLeft' : '9vw'}}>
                    <IconButton icon = {<IoIosDoneAll />} text = 'Done' redirect_link = '/users/dashboard' icon_size = '15vh' icon_color = '#00ffb7'/>
                </div>
            </div>
        </div>
    )
}

export default WorkoutCompleted
