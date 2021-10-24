import MainHeader from "../LandingPage/MainHeader"
import Navbar from '../Navbar/NavBar'
import Footer from '../Footer/Footer'

function AboutUsPage({ routes }){
    return (
        <>
            <Navbar routes = {routes} />
            <MainHeader text = 'Features' slogan = 'App Capabilities' />
            <p style = {{'marginTop' : '58vh'}}>.</p>
            <Footer />
        </>
    )
}

export default AboutUsPage
