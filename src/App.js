import './App.css'
import  Button from './Components/Button'
import Collab from './Components/Collab/Collab'
import React from 'react'
import GoogleSignIn from "./Components/GoogleSignIn/GoogleSignIn"
import Ask from './Components/Ask/Ask'
import Help from './Components/Help/Help'
import {
  BrowserRouter as Router,
  Route,
  Link,
    Switch
} from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute"


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            signedIn: Boolean(localStorage.getItem('userName'))
        }
        window.gapi.load('auth2', function() {
            window.gapi.auth2.init();
        });
    }

    handleLogin = () => {
        this.setState({
            signedIn: true
        });
    }



    render(){
  return (
      <div className="App">

      <Router>
        <>
            <Switch>
                <Route exact path = '/'>
                    {/*TODO: Put banner here*/}
                    <Collab className="jumbotron" title = "Collab Connect" />
                </Route>
                <Route>
                    <Collab className="jumbotron" title = "Collab Connect" />
                </Route>
            </Switch>
            <Route path = '/' exact>
                <GoogleSignIn onClick={this.handleLogin} visibility={!this.state.signedIn} />
                <div className='row'>
                    <Link className="col-md-6" to ={'/ask'}>
                        <Button className="float-right btn btn-primary" visibility={this.state.signedIn}>
                            Ask for help
                        </Button>
                    </Link>
                    <Link className="col-md-6" to={'/help'}>
                        <Button className="float-left btn btn-primary" visibility={this.state.signedIn}>
                            Help Others
                        </Button>
                    </Link>
                </div>
            </Route>

            <ProtectedRoute exact path='/ask'>
                <Ask />
            </ProtectedRoute>

            <ProtectedRoute exact path='/help'>
                <Help Vendor={true}/>
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
