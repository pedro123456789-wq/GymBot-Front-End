import NavItem from "./NavItem"

function NavBar({ routes }){
    return (
        <div>
            <ul className = 'nav text-center'>
                {routes.map((route) => {
                    return (<li className = 'nav-item' key = {route['name']}>
                        <NavItem route_name = {route['name']} route_path = {route['path']}/>
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default NavBar
