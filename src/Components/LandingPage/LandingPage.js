import NavBar from "../Navbar/NavBar"
import MainHeader from "./MainHeader"
import landing_image from '../../Assets/main_image.png'
import ImageElement from "./ImageElement"
import LargeButton from "./LargeButton"
import Footer from '../Footer/Footer'

function LandingPage({ routes }){
    return (
        <>
          <NavBar routes = { routes }/>
          <MainHeader text = 'Gym Bot' slogan = 'Your AI personal trainer'/>
          <ImageElement image_path = {landing_image} />
          
          <ul>
            <li style = {{'display' : 'inline-block', 'marginLeft' : '30vw'}}>
              <LargeButton text = 'Sign Up' redirect_link = '/sign-up'/>
            </li>

            <li style = {{'display' : 'inline-block', 'marginLeft' : '10vw'}}>
              <LargeButton text = 'Log In' redirect_link = '/log-in'/>
            </li>
          </ul>

          <Footer />
        </>
    )
}

export default LandingPage
