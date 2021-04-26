import React from 'react'
import './Collab.css'
import Down from '../Dropdown/Dropdown'

class Collab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className : props.className,
      title : props.title,
      userName: props.userName,
    }
  }

  render() {
    let label;
      label = localStorage.getItem('userName')? localStorage.getItem('userName') : ""

    return(
    <div className={this.state.className} >
        <div className="text-right">
            <div className='account'> {label} <Down /> </div>
        </div>
        <div>
            <h1> {this.state.title} </h1>
        </div>
    </div>
    )
  }
}

export default Collab;