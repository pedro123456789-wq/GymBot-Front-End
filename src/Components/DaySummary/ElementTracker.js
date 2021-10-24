import ReactSpeedometer from "react-d3-speedometer"



const ElementTracker = ({elementName, trackerColor, minValue, maxValue, currentValue}) => {
    return (
        <div>
            <button className = 'tracker-button'>
                <div>
                    <p className = 'form-title text-center' style = {{'fontSize' : '5vh', 'color' : 'white'}}>{elementName}</p>
                    <ReactSpeedometer value = {currentValue} 
                                    minValue = {minValue} 
                                    maxValue = {maxValue} 
                                    needleColor = {'#59f9ff'} 
                                    textColor = {'white'} 
                                    segmentColors = {[trackerColor]}
                                    needleTransitionDuration = {1000}
                                    width = {350}
                    />
                </div>
            </button>
        </div>
    )
}

export default ElementTracker
