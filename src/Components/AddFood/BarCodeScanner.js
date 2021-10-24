import FoodPopUp from "./FoodPopUp"
import BarcodeScannerComponent from "react-qr-barcode-scanner"
import React, {useState} from 'react'


function BarCodeScanner({ api_url }){
    const [showPopUp, togglePopUp] = useState(false)
    const [popupInfo, changeInfo] = useState({})

    
    const getBarCodeData = (barCode) => {
        const requestHandler = new XMLHttpRequest()

        requestHandler.addEventListener('loadend', () => {
            const response = JSON.parse(requestHandler.responseText)

            if (response['status'] === 'SUCCESS'){
                const carbs = `${response['nutrients']['carbohydrates']} ${response['nutrients']['carbohydrates_unit']}`
                const protein = `${response['nutrients']['proteins']} ${response['nutrients']['proteins_unit']}`
                const fat = `${response['nutrients']['fat']} ${response['nutrients']['fat_unit']}`
                const calories = `${response['nutrients']['energy-kcal']} kcal`
                const foodName = response['name']
                const servingSize = response['servingSize']

                changeInfo({
                                'foodName' : foodName, 
                                'protein' : protein, 
                                'carbs' : carbs, 
                                'fat' : fat, 
                                'calories' : calories, 
                                'servingSize' : servingSize
                            })

                togglePopUp(true)
            }else{
                alert('error')
            }
        })
    
        //add request headers and send request 
        requestHandler.open('GET', `${api_url}/api/diet/barcode/data`)
        requestHandler.setRequestHeader('Token', localStorage.getItem('loginToken'))
        requestHandler.setRequestHeader('Username', localStorage.getItem('userName'))
        requestHandler.setRequestHeader('Barcode', barCode)
        requestHandler.send()
    }


    return (
        <>

            {showPopUp ? 
                <FoodPopUp foodName = {popupInfo['foodName']} 
                           protein = {popupInfo['protein']} 
                           carbs = {popupInfo['carbs']} 
                           fat = {popupInfo['fat']} 
                           calories = {popupInfo['calories']} 
                           servingSize = {popupInfo['servingSize']}
                           api_url = {api_url}
                           togglePopUp = {togglePopUp}
                /> 
                :
                <> 
                    <div className = 'barcode-focus-div'>
                    </div>

                    <div className = 'webcam-div' style = {{'marginLeft' : '26vw', 'marginTop' : '8vh'}}>
                        <div style = {{'width' : 'fit-content', 'height' : 'fit-content', 'marginTop' : '2vh'}}>
                            <BarcodeScannerComponent
                                width={700}
                                height={500}
                                onUpdate={(err, result) => {
                                    if (result){
                                        getBarCodeData(result)
                                    }
                                }}
                            />
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default BarCodeScanner
