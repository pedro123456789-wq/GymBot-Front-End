import { FaDumbbell } from "react-icons/fa";
import {Link} from 'react-router-dom'

function StartWorkoutButton(){
    return (
        <div className = 'text-center' style = {{'marginTop' : '15.2vh'}}>
            <Link to = '/users/start-workout'>
                <button className = 'start-workout-button text-center btn'>
                    <div>
                        <h1>Start Workout</h1>
                        <FaDumbbell />
                    </div>
                </button>
            </Link>
        </div>
    )
}

export default StartWorkoutButton
