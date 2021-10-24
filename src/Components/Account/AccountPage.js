import AccountFeature from "./AccountFeature"
import SideBar from "../Dashboard/SideBar"
import LogoutButton from "./LogoutButton"


function AccountPage(){
    return (
        <div className = 'dashboard-div'>
            <SideBar />

            <h1 className = 'form-title text-center' style = {{'marginLeft' : '3vw'}}>Account Settings</h1>

            <AccountFeature featureName = 'Username' featureValue = {localStorage.getItem('userName')} yMargin = {10}/>
            <AccountFeature featureName = 'Password' featureValue = '***********' yMargin = {15}/>
            <AccountFeature featureName = 'Email' featureValue = 'pl156176@gmail.com' offSet = {-5} yMargin = {10}/>

            <LogoutButton />
        </div>
    )
}

export default AccountPage
