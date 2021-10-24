import { useLocation } from 'react-router-dom'
import IconButton from './IconButton'


function SideBarItem({ route, icon, text }){
    const currentLocation = useLocation()

    return (
        <div className = 'side-bar-item' style = {{'marginTop' : '12vh'}}>
            <IconButton icon = {icon} icon_color = {currentLocation.pathname === route ? '#ff0022' : 'white'} text = {text} redirect_link = {route} />
        </div>
    )
}

export default SideBarItem