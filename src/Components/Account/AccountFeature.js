import { MdCreate } from "react-icons/md"
import IconButton from "../Dashboard/IconButton"

function AccountFeature({featureName, featureValue, offSet = 0, yMargin = 0}){
    return (
        <div>
            <ul className = 'text-center mt-5'>
                <li style = {{'display' : 'inline-block', 'marginRight' : '5vw'}}>
                    <p className = 'form-text'> {featureName}: </p> 
                </li>

                <li style = {{'display' : 'inline-block', 'margin-right' : '5vw'}}>
                    <div className = 'settings-field-div'>
                        <h1 className = 'text-center' style = {{'fontSize' : '5vh', 'marginTop' : yMargin}}>
                            {featureValue}
                        </h1>
                    </div>
                </li>

                <li style = {{'display' : 'inline-block', 'marginRight' : `${10 + offSet}vw`}}>
                    <IconButton icon = {<MdCreate />}  icon_size = '6vh' icon_color = 'gray'/> 
                </li>
            </ul>
        </div>

    )
}

export default AccountFeature
