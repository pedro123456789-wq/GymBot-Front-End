import LoadingPage from '../LoadingPage/LoadingPage'
import LoginRequired from '../LoginRequiredPage/LoginRequired'
import AccountPage from './AccountPage'

import {ValidateToken} from '../Dashboard/ValidateToken'
import React, {useState, useLayoutEffect} from 'react'



function Account({ api_url }){
    const [isLoggedIn, toggleLogIn] = useState(false)
    const [isLoaded, flagLoad] = useState(false)

    useLayoutEffect(() => {
        ValidateToken(api_url, toggleLogIn, flagLoad)
    }, [api_url, toggleLogIn, flagLoad])


    return (
        <div>
            {isLoaded ? 
                isLoggedIn ? 
                    <AccountPage api_url = {api_url} /> :
                    <LoginRequired />
            : <LoadingPage />}
        </div>
    )
}

export default Account
