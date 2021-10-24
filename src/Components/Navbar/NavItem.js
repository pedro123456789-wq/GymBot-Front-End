import { Link, useLocation } from 'react-router-dom'

function NavItem({route_name, route_path}){
    const current_location = useLocation();

    return (
        <div>
            <Link to = {route_path} className = {`navbar-item ${current_location.pathname === route_path && 'selected'}`}>{route_name}</Link>
        </div>
    )
}

export default NavItem
