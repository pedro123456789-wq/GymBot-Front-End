import AlertBox from './AlertBox'
import {create_user}  from './createUserFunc'
import {useState} from "react"
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";



function SignInForm({ api_url }){
    const [showError, toggleError] = useState(false);
    const [errorMessage, changeMessage] = useState('');
    const history = useHistory()

    return (
        <div className = 'mt-5 text-center login-div'>
            <h1 style = {{'color' : 'white'}}>Sign Up</h1>
            
            {showError && <AlertBox text = {errorMessage} />}

            <p className = 'form-text'>Username</p>
            <input type = 'text' id  = 'username-input' className = 'input-area' placeholder = ' Enter username'></input>

            <p className = 'form-text'>Email</p>
            <input type = 'text' id = 'email-input' className = 'input-area' placeholder = 'Enter Email'></input>

            <p className = 'form-text'>Password</p>
            <input type = 'password' id = 'password-input' className = 'input-area' placeholder = 'Create password'></input>
            <input type = 'password' id = 'password-confirm-input' className = 'input-area' placeholder = 'Confirm password' style = {{'marginTop' : '3vh'}}></input>

            <button className = 'submit-button' style = {{'marginTop' : '6vh'}} onClick = {() => create_user(toggleError, changeMessage, api_url, history)}>Create Account</button>

            <div className = 'pb-3'style = {{'marginTop' : '3vh'}}>
                <Link to = '/log-in' className = 'small-form-text'>Already a member? Log In!</Link>
            </div>
        </div>
    )
}

export default SignInForm
