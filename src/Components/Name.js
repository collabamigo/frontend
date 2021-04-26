import React from 'react'

class Name extends React.Component {
    render() {
        return (
            <li key={this.props.name}>
                {this.props.name}
            </li>
        )
    }
}

export default Name