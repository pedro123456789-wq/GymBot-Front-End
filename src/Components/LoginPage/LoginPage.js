import NavBar from '../Navbar/NavBar'
import Footer from '../Footer/Footer'
import ImageElement from '../LandingPage/ImageElement'
import LoginForm from './LoginForm'
import secondary_image from '../../Assets/about_us_image.png'


function LoginPage({ routes, api_url, set_token }){
    return (
        <>
            <NavBar routes = {routes} />
            
            <ul className = 'nav'>
                <li style = {{'display' : 'inline-block'}}>
                    <ImageElement image_path = {secondary_image} />
                </li>

                <li style = {{'display' : 'inline-block', 'marginLeft' : '8vw'}}>
                    <LoginForm api_url = {api_url} set_token = {set_token}/>
                </li>  
            </ul>
            <Footer />
        </>
    )
}

export default LoginPage
