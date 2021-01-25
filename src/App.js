import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './components/ButtonStyle.css';
import './App.css';
import NavigationBar from './components/NavigationBar';
// import LoginForm from './components/LoginForm';
// import SignupForm from './components/SignupForm';
import Home from './components/Home';
import Jumbotron from './components/Jumbotron';
// import SearchForm from './components/SearchForm';
import NoMatch from './components/NoMatch';
import Footer from './components/Footer';
import Mission from './components/Mission';
import Vision from './components/Vision';
import ItProfiles from './components/ItProfiles';
import Transaction from './components/Transaction';
import NetworkSetupBackground from './components/NetworkSetupBackground';
import NetworkSecurityBackground from './components/NetworkSecurityBackground';
import DbmBackground from './components/DbmBackground';
import StsBackground from './components/StsBackground';
import NaviBar from './components/NaviBar';
import PcComponents from './components/PcComponents';
import ItemBuy from './components/ItemBuy';
import Network from './components/Network';
import Software from './components/Software';
import Monitor from './components/Monitor';
import Printer from './components/Printer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Profile from './components/Profile';


class App extends Component {
 render(){
  return (
    <React.Fragment>
    {/* <NavigationBar/> */}
   
    <Router>
    <Navbar/>
      <Jumbotron/>
      <NaviBar/>
    <div>
      <div className= "m-4 justify-content-center position-relative">
      
     <Switch>
      
     <Route path="/" exact component={Home}/>
     {/* <Route path="/signupform" component={SignupForm}/>
     <Route path="/loginform" component={LoginForm}/> */}
     {/* <Route path="/search" component={SearchForm}/> */}
     <Route path="/mission" component={Mission}/>
     <Route path="/vision" component={Vision}/>
     <Route path="/itprofile" component={ItProfiles}/>
     <Route path="/transaction" component={Transaction}/>
     <Route path="/networksetupbackground" component={NetworkSetupBackground}/>
     <Route path="/networksecuritybackground" component={NetworkSecurityBackground}/>
     <Route path="/dbmbackground" component={DbmBackground}/>
     <Route path="/stsbackground" component={StsBackground}/>
     <Route path="/pccomponents" component={PcComponents}/>
     <Route path="/itembuy" component={ItemBuy}/>
     <Route path="/network" component={Network}/>
     <Route path="/software" component={Software}/>
     <Route path="/monitor" component={Monitor}/>
     <Route path="/printer" component={Printer}/>
     <Route exact path="/register" component={Register}/>
     <Route exact path="/login" component={Login}/>
     <Route exact path="/profile" component={Profile}/>
  
     <Route component={NoMatch}/>
     </Switch>
     </div>
    </div>
    </Router>
    <Footer/>
    </React.Fragment>
  );
}
}
export default App;
