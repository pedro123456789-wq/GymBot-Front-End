import OptionButton from "./OptionButton"
import SideBar from '../Dashboard/SideBar'
import ManualAdd from "./ManualAdd"
import BarCodeScanner from "./BarCodeScanner"
import NameAdd from "./NameAdd"
import React, {useState} from 'react'
import { BiBarcodeReader, BiAddToQueue, BiTag} from "react-icons/bi";



function AddFoodPage({ api_url }){
    const [addType, toggleAddType] = useState('none')

    return (
        <div className = 'dashboard-div'>
            <h1 className = 'form-title text-center'>Add Food</h1>

            <SideBar />

            {addType === 'none' ? 
                <div>
                    <OptionButton optionName = 'Scan Barcode' optionIcon = {<BiBarcodeReader />} optionCallBack = {() => toggleAddType('barCode')} />
                    <OptionButton optionName = 'Enter Name' optionIcon = {<BiTag />} optionCallBack = {() => toggleAddType('name')} />
                    <OptionButton optionName = 'Manual Add' optionIcon = {<BiAddToQueue />} optionCallBack = {() => toggleAddType('manual')} />
                </div>
            : addType === 'manual' ?
                <ManualAdd api_url = {api_url} />
            : addType === 'barCode' ?
                <BarCodeScanner api_url = {api_url}/>
            : addType === 'name' &&
                <NameAdd api_url = {api_url} />
            }
        </div>
    )
}

export default AddFoodPage
