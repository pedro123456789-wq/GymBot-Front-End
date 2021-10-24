export function login_function(toggleError, changeMessage, api_url, history){
    const input_username = document.getElementById('username-input').value
    const input_password = document.getElementById('password-input').value

    if (input_username === '' || input_password === ''){
        toggleError(true)
        changeMessage('Please enter a username and a password')
        return
    }

    const requestHandler = new XMLHttpRequest()

    //add event listener to request object to check if there was an error
    requestHandler.addEventListener('loadend', () => {
        const response = JSON.parse(requestHandler.responseText)

        if (response['status'] === 'ERROR'){
            toggleError(true)
            changeMessage(response['message'])
        
        }else if (response['status'] === 'SUCCESS'){
            toggleError(false)
            const login_token = response['token']
            localStorage.setItem('loginToken', login_token)
            localStorage.setItem('userName', input_username)
            history.push('/users/dashboard')
        }
    })


    //add request headers and send request 
    requestHandler.open('POST', `${api_url}/users/log-in`)
    requestHandler.setRequestHeader('Username', input_username)
    requestHandler.setRequestHeader('Password', input_password)
    requestHandler.send()
}
