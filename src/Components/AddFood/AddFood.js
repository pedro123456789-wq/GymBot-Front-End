import AddFoodPage from "./AddFoodPage"
import {ValidateToken} from "../Dashboard/ValidateToken"
import LoginRequired from "../LoginRequiredPage/LoginRequired"
import LoadingPage from "../LoadingPage/LoadingPage"
import React, {useState, useLayoutEffect} from 'react'


function AddFood({ api_url }){
    const [isLoggedIn, toggleLogIn] = useState(false)
    const [isLoaded, flagLoad] = useState(false)

    useLayoutEffect(() => ValidateToken(api_url, toggleLogIn, flagLoad), [api_url, toggleLogIn, flagLoad])

    return (
        <>
            {isLoaded ? 
                isLoggedIn ?
                    <AddFoodPage api_url = {api_url} />
                : <LoginRequired />
            : <LoadingPage />}
        </>
    )
}

export default AddFood
