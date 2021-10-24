export function AddFoodFunc(foodName, calories, protein, carbs, fat, api_url, callbackSuccess, callbackError){
    const requestHandler = new XMLHttpRequest()

    requestHandler.addEventListener('loadend', () => {
        const response = JSON.parse(requestHandler.responseText)
        
        if (response['status'] === 'SUCCESS'){
            callbackSuccess()
        } else {
            callbackError()
        }
    })

    requestHandler.open('POST', `${api_url}/api/diet/add-food`)
    requestHandler.setRequestHeader('Token', localStorage.getItem('loginToken'))
    requestHandler.setRequestHeader('Username', localStorage.getItem('userName'))
    requestHandler.setRequestHeader('Foodname', foodName)
    requestHandler.setRequestHeader('Calories', calories)
    requestHandler.setRequestHeader('Protein', protein)
    requestHandler.setRequestHeader('Fat', fat)
    requestHandler.setRequestHeader('Carbs', carbs)
    requestHandler.send()
}