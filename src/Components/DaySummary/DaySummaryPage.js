import ElementTracker from './ElementTracker'
import SideBar from '../Dashboard/SideBar'
import { LineChart, Line } from 'recharts'



function DaySummaryPage({ api_url }){
    return (
        <div className = 'dashboard-div' style = {{'height' : '115vh'}}>
            <SideBar />


            <h1 className = 'form-title text-center'>
                Your Day
            </h1>


            <div className = 'text-center' style = {{'marginTop' : '7vh'}}>
                <ul>
                    <li style = {{'display' : 'inline-block', 'marginRight' : '10vw'}}>
                        <ElementTracker elementName = 'Calories Eaten' trackerColor = 'black' minValue = {0} maxValue = {500} currentValue = {100} />
                    </li>

                    <li style = {{'display' : 'inline-block'}}>
                        <ElementTracker elementName = 'Distance Ran' trackerColor = 'black' minValue = {0} maxValue = {500} currentValue = {300} />
                    </li>
                </ul>

                <ul className = 'text-center' style = {{'marginTop' : '3vh'}}>
                    <li style = {{'display' : 'inline-block', 'marginRight' : '10vw'}}>
                        <ElementTracker elementName = 'Calories Burned' trackerColor = 'black' minValue = {0} maxValue = {500} currentValue = {200} />
                    </li>

                    <li style = {{'display' : 'inline-block'}}>
                        <ElementTracker elementName = 'Minutes Trained' trackerColor = 'black' minValue = {0} maxValue = {500} currentValue = {150} />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DaySummaryPage
