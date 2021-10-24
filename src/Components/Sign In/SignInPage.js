import Navbar from '../Navbar/NavBar'
import Footer from '../Footer/Footer'
import ImageElement from '../LandingPage/ImageElement'
import SignInForm from './SignInForm'
import secondary_image from '../../Assets/about_us_image.png'



function SignInPage({ routes, api_url, set_username}){
    return (
        <>
            <Navbar routes = {routes}/>

            <ul className = 'nav'>
                <li style = {{'display' : 'inline-block'}}>
                    <ImageElement image_path = {secondary_image} />
                </li>

                <li style = {{'display' : 'inline-block', 'marginLeft' : '8vw'}}>
                    <SignInForm api_url = {api_url} set_username = {set_username}/>
                </li>  
            </ul>

            <Footer />
        </>
    )
}

export default SignInPage
