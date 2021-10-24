import LoginRequired from '../LoginRequiredPage/LoginRequired';
import React, { useEffect, useState } from 'react';
import LoadingPage from '../LoadingPage/LoadingPage';
import StartWorkoutPage from './StartWorkoutPage';



function StartWorkout({ api_url }){
    const [isLoggedIn, toggleLogIn] = useState(false)
    const [isLoaded, toggleLoad] = useState(false)
    const [workoutList, setList] = useState([])

    
    useEffect(() => {
        if (!isLoaded && !isLoggedIn){
            const requestHandler = new XMLHttpRequest()

            requestHandler.addEventListener('loadend', () => {
                const response = JSON.parse(requestHandler.responseText)
                
                if (response['status'] === 'SUCCESS'){
                    toggleLogIn(true)
                    setList(response['workout_list'])
                }

                toggleLoad(true)
            })
        
            //add request headers and send request 
            requestHandler.open('GET', `${api_url}/api/get-workouts`)
            requestHandler.setRequestHeader('Token', localStorage.getItem('loginToken'))
            requestHandler.setRequestHeader('Username', localStorage.getItem('userName'))
            requestHandler.send()
        }
    })


    return (
        <>
        {isLoaded ?
            (isLoggedIn ? 
                <div>
                    <StartWorkoutPage workoutList = {workoutList}/>
                </div>
            : <LoginRequired />): 
        <LoadingPage />}
    </>
    )
}

export default StartWorkout
