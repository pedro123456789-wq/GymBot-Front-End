import React, { useLayoutEffect, useState } from 'react';
import LoadingPage from '../LoadingPage/LoadingPage';
import LoginRequired from '../LoginRequiredPage/LoginRequired';
import WorkoutRunnerPage from './WorkoutRunnerPage';



function WorkoutRunner({ api_url }){
    const [isLoggedIn, toggleLogIn] = useState(false)
    const [isLoaded, flagLoad] = useState(false)

    const getUserData = (api_url) => {
        const requestHandler = new XMLHttpRequest()

        requestHandler.addEventListener('loadend', () => {
            const response = JSON.parse(requestHandler.responseText)
            
            if (response['status'] === 'SUCCESS'){
                toggleLogIn(true)
            }

            flagLoad(true)
        })
    
        //add request headers and send request 
        requestHandler.open('POST', `${api_url}/api/check-token`)
        requestHandler.setRequestHeader('Token', localStorage.getItem('loginToken'))
        requestHandler.setRequestHeader('Username', localStorage.getItem('userName'))
        requestHandler.send()
    }

    useLayoutEffect(() =>{
        getUserData(api_url)
    })

    
    return (
        <>
        {isLoaded ?
            (isLoggedIn ? 
                <WorkoutRunnerPage />
            : <LoginRequired />): 
        <LoadingPage />}
        </>
    )
}

export default WorkoutRunner
