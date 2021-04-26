import React from 'react'
import Name from './Name'

class NamesContainer extends React.Component {
    render() {
        return (
            <>
                {this.props.names.map(name => <Name name = {name} />)}
            </>
        )
    }
}

export default NamesContainer