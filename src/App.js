import './App.css'
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
import Footer from './Components/Footer/Footer'
import About from './Components/AboutUs/AboutUs'


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
                {this.state.signedIn
                    ?
                    <div className='row'>
                        <div className='col'/>
                        <Link className="col-auto btn btn-primary"  to='/ask'>
                                Ask for help
                        </Link>
                        <div className='col-2'/>
                        <Link className="col-auto btn btn-primary" to='/help'>
                                Help Others
                        </Link>
                        <div className='col'/>
                    </div>:

                    null}
            </Route>

            <ProtectedRoute exact path='/ask'>
                <Ask />
            </ProtectedRoute>

            <ProtectedRoute exact path='/help'>
                <Help Vendor={true}/>
            </ProtectedRoute>

            <Route exact path = "/about">
                <About />
            </Route>
            <Route exact path='/403'>
                <h6>ERROR: This page is only visible to logged in users. Meet Gandalf</h6>
                <img src="https://i.giphy.com/media/njYrp176NQsHS/giphy.gif"
                     alt="Gandalf you shall not pass" loading="lazy"/>
                <a href={'/'}><h5>Go to homepage</h5></a>
            </Route>
            <Footer />
        </>
      </Router>
      </div>
  );}
}

export default App;
