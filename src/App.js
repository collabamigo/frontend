// TODO: Add a clear cache button
import './App.css';
import  Button from './Components/Button'
import Collab from './Components/Collab/Collab'
import React from 'react'
import GoogleSignIn from "./Components/GoogleSignIn/GoogleSignIn";
import Ask from './Components/Ask/Ask'
import Help from './Components/Help/Help'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            loggedIn: Boolean(localStorage.getItem('userName'))
        }

    }

    handleLogin = (user) => {
        this.setState({
            loggedIn: true
        });
    }



    render(){

  return (
      <div className="App">
          <Collab className="jumbotron" title = "Collab Connect" />

      <Router>
        <>
            <Route path = '/' exact>
                    <GoogleSignIn onClick={this.handleLogin} visibility={!this.state.loggedIn} />
                <div className='row'>
                    <div className="col-md-5"/>
                        <div className="col-md-1" >
                            <Link to ={'/ask'}><Button className="btn btn-primary" title="Ask for help" visibility={this.state.loggedIn} /> </Link>
                        </div>
                        <div className="col-md-1">
                            <Link to={'/help'}><Button className="btn btn-primary" title="Help Others" visibility={this.state.loggedIn} /> </Link>
                        </div>
                    </div>

            </Route>
            <ProtectedRoute exact path='/ask'>
                <Ask />
            </ProtectedRoute>
            <ProtectedRoute exact path='/help'>
                <Help />
            </ProtectedRoute>
            <Route exact path='/403'>
                <h6>ERROR: This page is only visible to logged in users. Meet Gandalf</h6>
                <img src="https://i.giphy.com/media/njYrp176NQsHS/giphy.gif"
                     alt="Gandalf you shall not pass" loading="lazy"/>
                <a href={'/'}><h5>Go to homepage</h5></a>
            </Route>
        </>
      </Router>
      </div>
  );}
}

export default App;
