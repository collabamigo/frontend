import React from 'react'

class Name extends React.Component {
    render() {
        return (
            <div key={this.props.name}>
                {this.props.name}
            </div>
        )
    }
}

class NamesContainer extends React.Component {
    render() {
        return (
            <>
                {this.props.names.map(name => <Name name = {name} key={name}/>)}
            </>
        )
    }
}

export default NamesContainer
