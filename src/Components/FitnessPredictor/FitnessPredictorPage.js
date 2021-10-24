import SideBar from '../Dashboard/SideBar'
import BodyFatPredictor from './BodyFatPredictor'
import BMRPredictor from './BMRPredictor'
import React, { useState } from 'react'
import { BsArrowRight } from "react-icons/bs"



function FitnessPredictorPage({ api_url }){
    const [currentPredictor, changePredictor] = useState('Body Fat')

    const togglePredictor = () => {
        if (currentPredictor === 'Body Fat'){
            changePredictor('BMR')
        }else if (currentPredictor === 'BMR'){
            changePredictor('Body Dimensions')
        }else if (currentPredictor === 'Body Dimensions'){
            changePredictor('Body Fat')
        }

        window.scrollTo(0, 130)
    }

    return (
        <div className = 'dashboard-div' style = {{'height' : '120vh'}}>
            <div className = 'text-center'>
                <ul>
                    <li style = {{'display' : 'inline-block', 'marginLeft' : '15vw'}}>
                        <h1 className = 'form-title'>{currentPredictor} Predictor</h1>
                    </li>

                    <li style = {{'display' : 'inline-block', 'marginLeft' : '10vw'}}>
                        <button className = 'icon-button' style = {{'--icon-size' : '10vh', '--color' : 'red', '--hover-color' : 'blue'}} onClick = {togglePredictor}><BsArrowRight /></button>
                    </li>
                </ul>
            </div>

            <SideBar />

            <div className = 'predictor-div mb-5'>
                {
                    currentPredictor === 'Body Fat' ? <BodyFatPredictor api_url = {api_url}/> 
                    :
                    currentPredictor === 'BMR' ? <BMRPredictor api_url = {api_url} /> : ''
                
                }
            </div>
        </div>
    )
}

export default FitnessPredictorPage
