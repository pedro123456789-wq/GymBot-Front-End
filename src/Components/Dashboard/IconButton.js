import {Link} from 'react-router-dom'


function IconButton({icon, icon_color, text, redirect_link, icon_size = '8.8vh', font_size = '2vh', hover_color = 'blue'}){
    return (
        <Link to = {redirect_link}>
            <button className = 'icon-button' style = {{'--color' : icon_color, '--icon-size' : icon_size, '--hover-color' : hover_color}}>
                {icon}
                <p style = {{'fontSize' : font_size}}>{text}</p>
            </button>
        </Link>
    )
}

export default IconButton
