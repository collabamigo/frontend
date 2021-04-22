// import logo from './logo.svg';
import './App.css';
import  Button from './Components/Button'
import Collab from './Components/Collab'
import React from 'react'

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            isActive: false
        }
    }
    handleHide = () => {
        this.setState({
          isActive: true
        });
      };
    render(){
  return (
    <div className="App">
        <Collab className="jumbotron" title = "Collab Connect"/>
        <Button className ="btn btn-primary" title= "Login using IIITD" onClick={this.handleHide} state={!this.state.isActive} />
        <Button className="btn btn-primary" title="Ask for help" state={this.state.isActive} />
        <Button className="btn btn-primary" title="Help Others" state={this.state.isActive}  />
    </div>
  );}
}

export default App;