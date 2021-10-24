import InputField from "./InputField"
import ResultPopUp from "./ResultPopUp"
import React, {useState} from 'react'


function BMRPredictor({ api_url }){
    const [showPopUp, togglePopUp] = useState(false);
    const [BMRValue, changeBMR] = useState('');
    const [showError, toggleError] = useState(false)


    const calculateBMR = () => {
        const age = document.getElementById('Age: ').value
        const height = document.getElementById('Height (cm): ').value
        const weight = document.getElementById('Weight (kg): ').value
        const gender = document.getElementById('bmr-gender').value.toLowerCase()


        if (age === '' || height === '' || weight === ''){
            toggleError(true)
            return 
        }


        // //request handler object
        const requestHandler = new XMLHttpRequest()

        requestHandler.addEventListener('loadend', () => {
            const response = JSON.parse(requestHandler.responseText)
            
            if (response['status'] === 'SUCCESS'){
                togglePopUp(true)
                changeBMR(response['BMR'])
            }
        })
    
        //add request headers and send request 
        requestHandler.open('GET', `${api_url}/fitness/predictions/BMR`)
        requestHandler.setRequestHeader('Token', localStorage.getItem('loginToken'))
        requestHandler.setRequestHeader('Username', localStorage.getItem('userName'))
        requestHandler.setRequestHeader('Weight', weight)
        requestHandler.setRequestHeader('Height', height)
        requestHandler.setRequestHeader('Age', age)
        requestHandler.setRequestHeader('Gender', gender)
        requestHandler.send()
    }



    return (
        <>  
            {showError && 
                <ResultPopUp title = 'Invalid Input' 
                             value = 'Error' 
                             color = 'white'
                             group = 'Please enter a valid input'
                             togglePopUp = {toggleError}
                />
            }

         
            <div>
                <InputField inputName = 'Age: ' marginLeft = {20} marginRight = {2}/>
                <InputField inputName = 'Height (cm): ' marginLeft = {18} marginRight = {9}/>
                <InputField inputName = 'Weight (kg): ' marginLeft = {18} marginRight = {9}/>

                <ul>
                    <li style = {{'display' : 'inline-block', 'marginRight' : '25vw'}}>
                        <p className = 'form-text'>Gender: </p>
                    </li>

                    <li style = {{'display' : 'inline-block', 'marginRight' : '10vw'}}>
                        <select id = 'bmr-gender' className = 'selection-box'>
                            <option value = 'male' className = 'form-text text-center'>Male</option>
                            <option value = 'female' className = 'form-text text-center'>Female</option>
                        </select>
                    </li>
                </ul>

                <div>
                    <button className = 'go-button-workout mb-5' style = {{'width' : '30vw', 'marginTop' : '5vh'}} onClick = {calculateBMR}>
                        <p className = 'form-text' style = {{'fontSize' : '4vh', 'marginLeft' : '7.5vw', 'marginBottom' : '4vh'}}>Calculate BMR</p>
                    </button>
                </div>
            </div>


            {showPopUp &&
                <ResultPopUp title = 'BMR Prediction' 
                             value = {`${BMRValue} calories`} 
                             color = 'green' 
                             group = 'Maintenance Calories' 
                             togglePopUp = {togglePopUp} 
                             rightOffset = {-6}
                />
            }   
        </>
        
    )
}

export default BMRPredictor
