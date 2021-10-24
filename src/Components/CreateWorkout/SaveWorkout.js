export function saveWorkout(api_url, exerciseList, history){
    const requestHandler = new XMLHttpRequest()

    requestHandler.addEventListener('loadend', () => {
        const response = JSON.parse(requestHandler.responseText)
        
        if (response['status'] === 'SUCCESS'){
            history.push('/users/dashboard')
        }else{
            console.log(response['message'])
        }
    })

    var outputString = ''

    for (var i = 0; i < exerciseList.length; i++){
        for (var x = 0; x < exerciseList[i].length; x ++){
            outputString += `${exerciseList[i][x]}`

            if (x < exerciseList[i].length - 1){
                outputString += ','
            }
        }

        if (i < exerciseList.length - 1){
            outputString += ';'
        }
    }


    //add request headers and send request 
    requestHandler.open('POST', `${api_url}/api/create-workout`)
    requestHandler.setRequestHeader('Token', localStorage.getItem('loginToken'))
    requestHandler.setRequestHeader('Username', localStorage.getItem('userName' ))
    requestHandler.setRequestHeader('Workoutname', document.getElementById('workout-name').value)
    requestHandler.setRequestHeader('Exercises', outputString)
    requestHandler.send()
}