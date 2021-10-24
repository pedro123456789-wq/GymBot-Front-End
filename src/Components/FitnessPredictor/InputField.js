function InputField({ inputName, marginRight, marginLeft, inputType = 'number'}){
    return (
        <div>
            <ul style = {{'marginRight' : `${marginRight}vw`}}>
                <li style = {{'display' : 'inline-block'}}>
                    <p className = 'form-text'>{inputName}</p>
                </li>

                <li style = {{'display' : 'inline-block', 'marginLeft' : `${marginLeft}vw`}}>
                    <input type = {inputType} className = 'form-input text-center' min = {0} max = {1000} id = {inputName}></input>
                </li>
            </ul>
        </div>
    )
}

export default InputField
