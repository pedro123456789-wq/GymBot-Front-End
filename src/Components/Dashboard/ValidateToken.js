export function ValidateToken(api_url, toggleLogIn, flagLoad){
    const requestHandler = new XMLHttpRequest()

    //check if token is valid when response is recieved
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