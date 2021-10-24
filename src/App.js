import LandingPage from "./Components/LandingPage/LandingPage"
import LoginPage from "./Components/LoginPage/LoginPage"
import SignInPage from "./Components/Sign In/SignInPage"
import AboutUsPage from "./Components/About Us/AboutUsPage"
import VerifyEmail from "./Components/VerifyEmail/VerifyEmail"
import DashBoard from "./Components/Dashboard/DashBoard"
import CreateWorkout from "./Components/CreateWorkout/CreateWorkout"
import ManageWorkouts from "./Components/ManageWorkouts/ManageWorkouts"
import Statistics from "./Components/Statistics/Statistics"
import Targets from "./Components/Targets/Targets"
import StartWorkout from "./Components/StartWorkout/StartWorkout"
import WorkoutRunner from "./Components/WorkoutRunner/WorkoutRunner"
import Account from "./Components/Account/Account"
import AddFood from "./Components/AddFood/AddFood"
import FitnessPredictor from "./Components/FitnessPredictor/FitnessPredictor"
import DaySummary from "./Components/DaySummary/DaySummary"
import {BrowserRouter as Router, Route} from 'react-router-dom'




//add new database completed exercise entry every time exercise is completed
//make minutes trained and calories burned bars fetch data from server


function App() {
  const routes = [
                    {'name' : 'Home', 'path' : '/'}, 
                    {'name' : 'Features', 'path' : '/features'}, 
                    {'name' : 'Sign Up', 'path' : '/sign-up'}, 
                    {'name' : 'Log In', 'path' : '/log-in'}
                 ]
    
  const api_url = 'http://localhost:8080'


  return (
    <Router>
      <div className='App'>
        <Route exact path = '/'>
          <LandingPage routes = {routes} />
        </Route>

        <Route exact path = '/log-in'>
          <LoginPage routes = {routes} api_url = {api_url}/>
        </Route>

        <Route exact path = '/sign-up'>
          <SignInPage routes = {routes} api_url = {api_url}/>
        </Route>

        <Route exact path = '/features'>
          <AboutUsPage routes = {routes} />
        </Route>

        <Route exact path = '/verify-email'>
          <VerifyEmail routes = {routes} api_url = {api_url}/>
        </Route>

        <Route exact path = '/users/dashboard'>
          <DashBoard api_url = {api_url}/>
        </Route>

        <Route exact path = '/users/create/workout'>
          <CreateWorkout api_url = {api_url}/>
        </Route>

        <Route exact path = '/users/manage/workouts'>
          <ManageWorkouts api_url = {api_url} />
        </Route>

        <Route exact path = '/users/stats'>
          <Statistics api_url = {api_url} />
        </Route>

        <Route exact path = '/users/targets'>
          <Targets api_url = {api_url} />
        </Route>

        <Route exact path = '/users/start-workout'>
          <StartWorkout api_url = {api_url} />
        </Route>

        <Route exact path = '/users/workout/in-progress'>
          <WorkoutRunner api_url = {api_url} />
        </Route>

        <Route exact path = '/users/account/settings'>
          <Account api_url = {api_url} />
        </Route>

        <Route exact path = '/users/food/add'>
          <AddFood api_url = {api_url} />
        </Route>

        <Route exact path = '/users/fitness/predictor'>
          <FitnessPredictor api_url = {api_url} />
        </Route>

        <Route exact path = '/users/fitness/daily-stats'>
          <DaySummary api_url = {api_url}/>
        </Route>        
      </div>
    </Router>
  );
}

export default App;
