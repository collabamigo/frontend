import React from 'react'
import './Collab.css'
import DropdownMenu from '../DropdownMenu/DropdownMenu'

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
                <div className='account text-right'> {label} <DropdownMenu visibility={Boolean(localStorage.getItem('userName'))}/> </div>
                <h1> {this.state.title} </h1>
            </div>
        )
    }
}

export default Collab;
