import MainHeader from '../LandingPage/MainHeader'
import Footer from '../Footer/Footer'
import CodeInput from './CodeInput'
import AlertBox from '../Sign In/AlertBox'
import {useState} from "react"
import { useHistory } from "react-router-dom";



function VerifyEmail({ routes, api_url }){
    const [showError, toggleError] = useState(false)
    const history = useHistory()

    return (
        <>
            <MainHeader text = 'Verify Email' slogan = 'Enter the verfication code sent to your email'/>
            
            {showError &&
                <div className = 'text-center mt-5' style = {{'width' : '40vw', 'margin' : '0 auto'}}>
                    <AlertBox text = 'Invalid Code'/>
                </div>
            }
            
            <CodeInput toggleError = {toggleError} api_url = {api_url} history = {history}/>
            <Footer />
        </>
    )
}

export default VerifyEmail
