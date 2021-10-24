import FitnessPredictorPage from "./FitnessPredictorPage"
import LoadingPage from '../LoadingPage/LoadingPage'
import LoginRequired from '../LoginRequiredPage/LoginRequired'
import { ValidateToken } from '../Dashboard/ValidateToken'
import React, { useState, useLayoutEffect } from 'react'


function FitnessPredictor({api_url}){
    const [isLoaded, flagLoad] = useState(false)
    const [isLoggedIn, toggleLogIn] = useState(false)

    useLayoutEffect(() => ValidateToken(api_url, toggleLogIn, flagLoad), [toggleLogIn, api_url, flagLoad])


    return (
        <div>
            {
                isLoaded ?
                    isLoggedIn ?
                        <FitnessPredictorPage api_url = {api_url} />
                    :  <LoginRequired />
                : <LoadingPage />
            }
        </div>
    )
}

export default FitnessPredictor
