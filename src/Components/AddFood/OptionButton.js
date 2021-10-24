function OptionButton({optionName, optionIcon, optionCallBack}){
    return (
        <div className = 'text-center' style = {{'marginTop' : '10vh'}}>
            <button className = 'food-option-button' onClick = {optionCallBack}>
                <ul className = 'text-center' style = {{'marginRight' : '8vw'}}>
                    <li style = {{'display' : 'inline-block'}}>
                        <p className = 'form-text'>{optionName}</p>
                    </li>

                    <li style = {{'display' : 'inline-block', 'marginLeft' : '3vw'}}>
                        {optionIcon}
                    </li>
                </ul>
            </button>
        </div>
    )
}

export default OptionButton
