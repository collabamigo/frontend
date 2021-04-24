
import './App.css';
import  Button from './Components/Button'
import Collab from './Components/Collab'
import React from 'react'
import GoogleSignIn from "./Components/GoogleSignIn";
import Ask from './Components/ask'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            isActive: false,
            user: null
        }
    }

    handleLogin = (user) => {
        this.setState({
            user: user
        });
        this.handleHide();
    }

    handleHide = () => {
        this.setState({
          isActive: true
        });
      };

    render(){
        let label;
        if (this.state.user !== null)
        {
            label = <h1>Hello {this.state.user.getBasicProfile().getName()}</h1>
        }
        else
        {
            label = ''
        }

  return (
      <Router>
        <div className="App">
            <Route path = '/' exact render = {(props) =>
                (<>
                    <Collab className="jumbotron" title = "Collab Connect" />
                    <GoogleSignIn onClick={this.handleLogin} visibility={!this.state.isActive} />
                    <Button className ="btn btn-primary" title= "Login using IIITD" onClick={this.handleHide} visibility={!this.state.isActive} />
                        {label}
                        <Link to ={'/ask'}><Button className="btn btn-primary" title="Ask for help" visibility={this.state.isActive} /> </Link>
                        <Link to={'/help'}><Button className="btn btn-primary" title="Help Others" visibility={this.state.isActive} /> </Link>
                    </>
                )} />

            <Route path='/ask' component={Ask} />
            <Route path='/help' component={Ask} />

        </div>
      </Router>
  );}
}

export default App;
