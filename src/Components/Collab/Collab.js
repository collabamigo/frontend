import React from 'react'
import './Collab.css'

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
        if (this.state.user !== null)
        {
            label = <>{this.props.userName}</>
        }
        else
        {
            label = ''
        }

    return(
    <div className={this.state.className} >
        <div className="text-right">
            <p className='account'> {label} <span className="material-icons">
            account_circle
            </span></p>
        </div>
        <div>
            <h1> {this.state.title} </h1>
        </div>
    </div>
    )
  }
}

export default Collab;