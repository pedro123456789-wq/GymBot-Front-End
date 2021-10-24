import { AiFillDelete } from "react-icons/ai";
import { MdCreate } from "react-icons/md";



function WorkoutButton({workoutName, workoutDuration, workoutRepetitions, api_url, listState, updateList}){
    const deleteWorkout = () => {
        const requestHandler = new XMLHttpRequest()

        requestHandler.addEventListener('loadend', () => {
            if (requestHandler.statusCode !== 200){
                return
            }
        })
    
        requestHandler.open('PUT', `${api_url}/api/workouts/delete-workout`)
        requestHandler.setRequestHeader('Token', localStorage.getItem('loginToken'))
        requestHandler.setRequestHeader('Username', localStorage.getItem('userName'))
        requestHandler.setRequestHeader('Workoutname', workoutName)
        requestHandler.send()

        updateList(delete listState[workoutName])
    }


    return (
        <div className = 'workout-button-div text-center'>
            <ul>
                <li style = {{'display' : 'inline-block'}}>
                    <div style = {{'width' : '23vw'}}>
                        <p className = 'workout-text' style = {{'--font-size' : (40 / workoutName.length) + 'vh'}}>{workoutName}</p>
                    </div>
                </li>

                <li style = {{'display' : 'inline-block'}}>
                    <button className = 'delete-button' onClick = {deleteWorkout}><AiFillDelete /></button>
                </li>

                <li style = {{'display' : 'inline-block'}}>
                    <button className = 'edit-button'><MdCreate /></button>
                </li>
            </ul>
        </div>
    )
}

export default WorkoutButton
