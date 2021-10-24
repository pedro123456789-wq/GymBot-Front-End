import {Link} from 'react-router-dom'

function LogoutButton(){
    const logout = () => {
        localStorage.removeItem('userName')
        localStorage.removeItem('loginToken')
    }


    return (
        <div className = 'text-center' style = {{'marginTop' : '12vh', 'marginLeft' : '5vw'}}>
            <Link to = '/'>
                <button onClick = {logout} className = 'btn log-out-button'>
                    <h1>Log Out</h1>
                </button> 
            </Link>
        </div>
    )
}

export default LogoutButton
