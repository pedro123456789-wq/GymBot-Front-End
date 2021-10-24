import {Link} from 'react-router-dom'
import {useState} from "react"
import {login_function} from './login_request';
import { useHistory } from "react-router-dom";
import AlertBox from '../Sign In/AlertBox'



function LoginForm({ api_url }){
    const [showError, toggleError] = useState(false);
    const [errorMessage, changeMessage] = useState('');
    const history = useHistory();

    return (
        <div className = 'mt-5 text-center login-div'>
            <h1 style = {{'color' : 'white'}}>Log In</h1>

            {showError && <AlertBox text = {errorMessage} />}

            <p className = 'form-text' style = {{'marginTop' : '10vh'}}>Username</p>
            <input type = 'text' id  = 'username-input' className = 'input-area' placeholder = ' Enter username'></input>

            <p className = 'form-text' style = {{'marginTop' : '10vh'}}>Password</p>
            <input type = 'password' id = 'password-input' className = 'input-area' placeholder = ' Enter password'></input>

            <div className = 'text-center' style = {{'marginTop' : '1vh'}}>
                <button className = 'submit-button' onClick = {() => login_function(toggleError, changeMessage, api_url, history)}>Log In</button>
            </div>

            <div style = {{'marginTop' : '7vh'}}>
                <Link to = '/sign-up' className = 'small-form-text'>Forgot Password?</Link>
            </div>

            <div style = {{'marginTop' : '2vh'}}>
                <Link to = '/sign-up' className = 'small-form-text'>Don't have an account? Sign Up!</Link>
            </div>
            
        </div>
    )
}

export default LoginForm
