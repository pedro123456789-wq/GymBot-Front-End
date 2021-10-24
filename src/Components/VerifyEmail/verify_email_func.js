export const verifyEmailFunc = (toggleError, api_url, history) => {
    const code = [...document.getElementsByClassName('code-input')].map((code) => code.value).join("")

    if (code.length === 6){
        const requestHandler = new XMLHttpRequest()

        //add event listener to request object to check if there was an error
        requestHandler.addEventListener('loadend', () => {
            const response = JSON.parse(requestHandler.responseText)
    
            if (response['status'] === 'ERROR'){
                toggleError(true)
            }else if (response['status'] === 'SUCCESS'){
                toggleError(false)
                history.push('/log-in')
            }
        })

        requestHandler.open('PUT', `${api_url}/users/sign-in/verify-email`)
        requestHandler.setRequestHeader('Username', localStorage.getItem('userName'))
        requestHandler.setRequestHeader('Code', code)
        requestHandler.send()
    }else{
        toggleError(true)
    }
}