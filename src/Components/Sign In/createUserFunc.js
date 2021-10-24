export function create_user(toggleError, changeMessage, api_url, history){
    //get user input from form 
    const input_username = document.getElementById('username-input').value
    const input_email = document.getElementById('email-input').value
    const input_password = document.getElementById('password-input').value
    const confirmation_password = document.getElementById('password-confirm-input').value

    
    //check if all fields have values
    if (input_username === '' || input_email === '' || input_password === ''){
        toggleError(true)
        changeMessage('Missing Fields! Please enter a value for all fields')
        return 
    }


    //check if confirmation password is equal to password
    if (confirmation_password !== input_password){
        toggleError(true)
        changeMessage('The two passwords do not match')
        return
    }

    
    //instantiate request-sending object
    const requestHandler = new XMLHttpRequest()


    //add event listener to request object to check if there was an error
    requestHandler.addEventListener('loadend', () => {
        const response = JSON.parse(requestHandler.responseText)

        if (response['status'] === 'ERROR'){
            toggleError(true)
            changeMessage(response['message'])
        }else if (response['status'] === 'SUCCESS'){
            toggleError(false)
            localStorage.setItem('userName', input_username)
            history.push('/verify-email')
        }
    })


    //add request headers and send request 
    requestHandler.open('POST', `${api_url}/users/sign-in`)
    requestHandler.setRequestHeader('Username', input_username)
    requestHandler.setRequestHeader('Email', input_email)
    requestHandler.setRequestHeader('Password', input_password)
    requestHandler.send()
}