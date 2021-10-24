import InputField from "./InputField"
import ResultPopUp from "./ResultPopUp"
import React, {useState} from 'react'




function BodyFatPredictor({ api_url }){
    const [showPopUp, togglePopUp] = useState(false)
    const [bodyFatPercentage, changePercentage] = useState('')
    const [showError, toggleError] = useState(false)


    const predictBodyFat = () => {
        const weightInput = document.getElementById('Weight(Kg): ').value
        const abodmenInput = document.getElementById('Abdomen Circumference (Cm): ').value
        const chestInput = document.getElementById('Chest Circumference (Cm):  ').value
        const hipInput = document.getElementById('Hip Circumference (Cm): ').value


        if (weightInput === '' || abodmenInput === '' || chestInput === '' || hipInput === ''){
            toggleError(true)
            return 
        }


        //request handler object
        const requestHandler = new XMLHttpRequest()

        requestHandler.addEventListener('loadend', () => {
            const response = JSON.parse(requestHandler.responseText)
            
            if (response['status'] === 'SUCCESS'){
                changePercentage(response['prediction'])
                togglePopUp(true)
            }
        })
    
        //add request headers and send request 
        requestHandler.open('GET', `${api_url}/api/predictions/body-fat`)
        requestHandler.setRequestHeader('Token', localStorage.getItem('loginToken'))
        requestHandler.setRequestHeader('Username', localStorage.getItem('userName'))
        requestHandler.setRequestHeader('Weight', weightInput)
        requestHandler.setRequestHeader('Abdomen', abodmenInput)
        requestHandler.setRequestHeader('Hip', hipInput)
        requestHandler.setRequestHeader('Chest', chestInput)
        requestHandler.send()
    }


    const selectClass = (bodyFat) =>{
        if (bodyFat < 13){
            return ['blue', 'Athletic']
        }else if (bodyFat >= 13 && bodyFat < 17){
            return ['green', 'Healthy']
        }else if (bodyFat >= 17 && bodyFat < 25){
            return ['yellow', 'Acceptable / High']
        }else if (bodyFat >= 25){
            return ['red', 'Obese']
        }
    }


    return (
        <div>
            {showError && 
                <ResultPopUp title = 'Invalid Input' 
                             value = 'Error' 
                             color = 'white'
                             group = 'Please enter a valid input'
                             togglePopUp = {toggleError}
                />
            }

            <InputField inputName = 'Weight(Kg): ' marginLeft = {22} marginRight = {0.5}/>
            <InputField inputName = 'Abdomen Circumference (Cm): ' marginLeft = {6} marginRight = {5}/>
            <InputField inputName = 'Chest Circumference (Cm):  ' marginRight = {4} marginLeft = {9}/>
            <InputField inputName = 'Hip Circumference (Cm): ' marginLeft = {9} marginRight = {1}/>

            <div>
                <button className = 'go-button-workout mb-5' style = {{'width' : '30vw', 'marginTop' : '5vh'}} onClick = {predictBodyFat}>
                    <p className = 'form-text' style = {{'fontSize' : '4vh', 'marginLeft' : '7.5vw', 'marginBottom' : '4vh'}}>Predict Body Fat</p>
                </button>
            </div>

            {showPopUp && 
                <ResultPopUp title = 'Body Fat Percentage' 
                             value = {`${bodyFatPercentage}`} 
                             color = {selectClass(parseInt(bodyFatPercentage))[0]}
                             group = {selectClass(parseInt(bodyFatPercentage))[1]}
                             togglePopUp = {togglePopUp}
                />
            }   
        </div>
    )
}

export default BodyFatPredictor
