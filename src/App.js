// import logo from './logo.svg';
import './App.css';
import  Button from './Components/Button'
import Collab from './Components/Collab'
import React from 'react'
import GoogleSignIn from "./Components/GoogleSignIn";

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
        let label ='';
        if (this.state.user !== null)
        {
            label = <h1>Hello {this.state.user.getBasicProfile().getName()}</h1>
        }
        else
        {
            label = ''
        }
  return (
    <div className="App">
        <Collab className="jumbotron" title = "Collab Connect" />
        <GoogleSignIn onClick={this.handleLogin} state={!this.state.isActive} />
        <Button className ="btn btn-primary" title= "Login using IIITD" onClick={this.handleHide} state={!this.state.isActive} />
        {label}
        <Button className="btn btn-primary" title="Ask for help" state={this.state.isActive} />
        <Button className="btn btn-primary" title="Help Others" state={this.state.isActive}  />

    </div>
  );}
}

export default App;
