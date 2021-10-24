import IconButton from "./IconButton"
import ProgressBar from "./ProgressBar";
import SideBar from "./SideBar";
import StartWorkoutButton from "./StartWorkoutButton";
import { VscAccount } from "react-icons/vsc";
import { MdCreate } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { GiAvocado } from "react-icons/gi";
import { BiStats } from "react-icons/bi";
import { FaRunning } from "react-icons/fa";




const DasboardPage = ({ caloriesConsumed }) => {
    return (
        <div className = 'dashboard-div' style = {{'height' : '105vh'}}>
            <ul>
                <li style = {{'display' : 'inline-block', 'marginLeft' : '21vw'}}>
                        <div>
                            <IconButton icon = {<MdCreate />} text = 'Create Workout' icon_color = '#00ddff' redirect_link = '/users/create/workout' />
                        </div>
                </li>

                <li style = {{'display' : 'inline-block', 'marginLeft': '5vw'}}>
                    <div>
                        <IconButton icon = {<IoMdMenu />} text = 'Manage Workouts' icon_color = '#ffffff' redirect_link = '/users/manage/workouts' />
                    </div>
                </li>

                <li style = {{'display' : 'inline-block', 'marginLeft': '5vw'}}>
                    <div>
                        <IconButton icon = {<GiAvocado />} text = 'Add Food' icon_color = '#059922' redirect_link = '/users/food/add' />
                    </div>
                </li>

                <li style = {{'display' : 'inline-block', 'marginLeft': '5vw'}}>
                    <div>
                        <IconButton icon = {<FaRunning />} text = 'Fitness Predictors' icon_color = '#de7504' redirect_link = '/users/fitness/predictor' />
                    </div>
                </li>

                <li style = {{'display' : 'inline-block', 'marginLeft': '5vw'}}>
                    <div>
                        <IconButton icon = {<BiStats />} text = 'Your Day' icon_color = '#710387' redirect_link = '/users/fitness/daily-stats' />
                    </div>
                </li>


                
                <li style = {{'display' : 'inline-block', 'marginLeft' : '14vw'}}>
                    <div>
                        <IconButton icon = {<VscAccount />} icon_color = '#ffffff' redirect_link = '/users/account/settings' />
                    </div>
                </li>
            </ul>


            <SideBar />
            <StartWorkoutButton />

            <div style = {{'marginLeft' : '2vw', 'marginTop' : '12vh'}}>
                <ProgressBar title = 'Distance Ran (km)' current_value = {5} max_value = {10} color = 'red' />
            </div>

            <div style = {{'marginTop' : '3vh', 'marginLeft' : '2vw'}}>
                <ProgressBar title = 'Minutes Trained' current_value = {60} max_value = {1000} color = 'red'/>
            </div>

            <div style = {{'marginTop' : '3vh', 'marginLeft' : '2vw'}}>
                <ProgressBar title = 'Calories Eaten' current_value = {caloriesConsumed} max_value = {4000} color = 'red'/>
            </div>

            <div style = {{'marginTop' : '3vh', 'marginLeft' : '2vw'}}>
                <ProgressBar title = 'Calories Burned' current_value = {750} max_value = {1000} color = 'red'/>
            </div>
        </div>
    )
}

export default DasboardPage