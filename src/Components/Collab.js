import React from 'react'
import Button from "./Button";

class Collab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className : props.className,
      title : props.title
    }
  }
  render() {
    return(
    <div className={this.state.className}>
      <h1> {this.state.title} </h1>
    </div>
    )
  }
}

export default Collab