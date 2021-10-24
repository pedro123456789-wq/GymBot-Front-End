import WorkoutButton from "./WorkoutButton"
import SideBar from "../Dashboard/SideBar"
import React, { useState } from 'react';



function ManageWorkoutsPage({ workoutList, api_url}){
    const [ listState, updateList ] = useState(workoutList)

    return (
        <div style = {{'background' : 'linear-gradient(black, gray)'}}>
            <div className = 'wrapper'>
                <SideBar isSticky = {true}/>
                
                <div className = 'mainContent'>
                    <h1 className = 'form-title' style = {{'marginLeft' : '8.5vw'}}>Manage Workouts</h1>
            
                    {
                        Object.entries(workoutList).map(([key, value]) => {
                            return <WorkoutButton workoutName = {key} api_url = {api_url} listState = {listState} updateList = {updateList}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ManageWorkoutsPage
