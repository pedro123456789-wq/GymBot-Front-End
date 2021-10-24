function AlertBox({text}){
    return (
        <div className = 'mt-4 pt-1 pb-1' style = {{'background': '#ed2d07', 'borderRadius' : '1vh'}}>
            <p className = 'mt-3 text-center' style = {{'color' : 'white', 'fontSize' : '2vh'}}>{text}</p>
        </div>
    )
}

export default AlertBox
