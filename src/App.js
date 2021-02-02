import './App.css';
import Home from './components/Home';
import MyProfile from './components/MyProfile';
import MyReservation from './components/MyReservation';
//import React,{useState} from 'react';
// import Form from './components.Form'
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch 
} from 'react-router-dom'; 
import './header.scss';



function App() {
  return (
    <div>
      <Router>
        <div>
          <ul className="header" id="header">
            <li>MyRentalzz</li>
            <li className="label0"> 
                <Link  to="/">Home</Link> 
              </li> 
              <li className="label0"> 
                <Link to="/myreservation">My Reservation</Link> 
              </li> 
              <li className="label0"> 
                <Link to="/myprofile">My profile</Link> 
              </li> 
          </ul>
          <Switch> 
              <Route exact path='/' component={Home}></Route> 
              <Route path='/myreservation' component={MyReservation}></Route> 
              <Route path='/myprofile' component={MyProfile}></Route> 
            </Switch> 
        </div>
        
      </Router>
      <footer id="footer" style={{display:"flex",alignItems:"center",justifyContent:"flex-end"}}>
        <button disabled>View Reservation Details</button>
      </footer>
    </div>

    
  );
}

export default App;
