import SideBarItem from "./SideBarItem";
import { GoGraph } from "react-icons/go";
import { BiTargetLock } from "react-icons/bi";
import { VscHome} from "react-icons/vsc";



function SideBar({isSticky = false}){
    return (
        <div className = {isSticky ? 'sticky-sideBar' : 'sideBar'}>
                <ul className = 'text-center'>
                    <li>
                        <SideBarItem route = '/users/dashboard' text = 'Home' icon = {<VscHome />} />
                    </li>

                    <li>
                        <SideBarItem route = '/users/stats' text = 'Stats' icon = {<GoGraph />} />
                    </li>

                    <li>
                        <SideBarItem route = '/users/targets' text = 'targets' icon = {<BiTargetLock />} />
                    </li>
                </ul>
            </div>
    )
}

export default SideBar
