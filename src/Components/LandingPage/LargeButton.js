import {Link} from 'react-router-dom'

function LargeButton({text, redirect_link}){
    return (
        <div className = 'text-center mt-5 mb-5'>
            <Link to = {redirect_link}><button className = 'btn sign-in-button'>{text}</button></Link>
        </div>
    )
}

export default LargeButton
