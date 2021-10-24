import LoginRequired from '../LoginRequiredPage/LoginRequired';
import React, { useLayoutEffect, useState } from 'react';
import LoadingPage from '../LoadingPage/LoadingPage';
import DasboardPage from './DasboardPage';



function DashBoard({ api_url }){
    const [isLoggedIn, toggleLogIn] = useState(false)
    const [isLoaded, flagLoad] = useState(false)
    const [caloriesConsumed, setCaloriesConsumed] = useState(0)

    const getUserData = (api_url) => {
        const requestHandler = new XMLHttpRequest()

        requestHandler.addEventListener('loadend', () => {
            const response = JSON.parse(requestHandler.responseText)
            
            if (response['status'] === 'SUCCESS'){
                toggleLogIn(true)
                setCaloriesConsumed(response['message']['calories'])
            }

            flagLoad(true)
        })
    
        //add request headers and send request 
        requestHandler.open('GET', `${api_url}/api/dashboard`)
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
                    <div>
                        <DasboardPage caloriesConsumed = {caloriesConsumed}/>
                    </div>
                : <LoginRequired />): 
            <LoadingPage />}
        </>
    )
}

export default DashBoard
