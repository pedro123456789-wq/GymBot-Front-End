function ModeButton({ workoutMode, backgroundColor, selectedMode, changeMode}){
    return (
        <div className = 'text-center' style = {{'marginTop' : '8vh'}}>
            <button className = {`mode-button ${selectedMode === workoutMode && 'selected'}`} style = {{'--background-color' : backgroundColor}} 
            onClick = {() => {
                changeMode(workoutMode)
                window.scrollTo(0, 500)
                }
            }
                >
                <p className = {`mode-text ${selectedMode === workoutMode && 'selected'}`}>{workoutMode}</p>
            </button>
        </div>
    )
}

export default ModeButton
