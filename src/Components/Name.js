import React from 'react'

class Name extends React.Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}

export default Name