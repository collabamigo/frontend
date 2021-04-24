import React from 'react'

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
            label = <h1>{this.props.userName}</h1>
        }
        else
        {
            label = ''
        }

    return(
    <div className={this.state.className}>
      <h1> {this.state.title} </h1>
      <h1>{label}</h1>
    </div>
    )
  }
}

export default Collab