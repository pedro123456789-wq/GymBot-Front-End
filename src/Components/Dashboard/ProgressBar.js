function ProgressBar({title, current_value, max_value}){
    const percentageFilled = (current_value / max_value)
    var barColor;

    if (percentageFilled < 0.5){
        barColor = 'red'
    }else if (percentageFilled >= 0.5 && percentageFilled < 0.75){
        barColor = 'orange'
    }else{
        barColor = 'green'
    }


    return (
        <div className = 'text-center'>
            <ul>
                <li style = {{'display' : 'inline-block', 'margin' : '0 auto'}} className = 'ml-5'>
                    <div style = {{'display' : 'grid'}}>
                        <div className = 'progress-bar-under text-center'></div>
                        <div className = 'progress-bar-top text-center' style = {{'--width' : `${(current_value / max_value) * 50}vw`, '--color' : barColor}}></div>

                        <div className = 'text-center' style = {{'gridArea' : '1 / 2', 'width' : '50vw'}}>
                            <p className = 'progress-label'>{`${title}: ${current_value} / ${max_value}`}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ProgressBar
