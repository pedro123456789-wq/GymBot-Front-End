import IconButton from "../Dashboard/IconButton"
import { AiFillCloseCircle } from "react-icons/ai"


function ResultPopUp({title, value, color, group, togglePopUp, rightOffset = 0}){
    return (
        <div className = 'result-pop-up'>
            <ul className = 'text-center'>
                <li style = {{'display' : 'inline-block'}}>
                    <p className = 'form-text text-center' style = {{'color' : '#3b464f', 'marginLeft' : '8vw'}}>
                        {title}
                    </p>
                </li>

                <li style = {{'display' : 'inline-block', 'marginLeft' : '8vw'}}>
                    <button onClick = {() => togglePopUp(false)} style = {{'background' : 'transparent', 'border' : 'none'}}><IconButton icon = {<AiFillCloseCircle />} icon_color = {'#3b464f'} hover_color = 'black'/></button>
                </li>
            </ul>

            <p className = 'form-text text-center' style = {{'color' : color, 'fontSize' : '10vh', 'marginRight' : `${1 * value.length + rightOffset}vw`}}>{value}</p>
            <p className = 'form-text text-center mt-5' style = {{'color' : color, 'marginRight' : `${1 * value.length + rightOffset}vw`}}>{group}</p>
        </div>
    )
}

export default ResultPopUp
