import MainHeader from "../LandingPage/MainHeader"
import login_required_image from '../../Assets/login_required.png'
import Footer from '../Footer/Footer'


function LoginRequired(){
    return (
        <div>
            <MainHeader text = 'Login Required' slogan = 'You need to login to access this page' />   

            <div className = 'text-center mt-5'>
                <img alt = 'stop-sign' src = {login_required_image} style = {{'width' : '30vw'}}/>
            </div> 

            <Footer />
        </div>
    )
}

export default LoginRequired
