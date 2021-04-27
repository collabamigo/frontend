import React from "react";
import './Help.css'
import DashBoard from './DashBoard'

class Ask extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            Vendor: props.Vendor
        }
    }

    render(){
        if (this.state.Vendor){
            return(
                <DashBoard />
            )
        }
        else{
            return(
               <div>
                   <h1>Sorry you can not help</h1>
                   <p>In order to help Please register with us</p>

               </div>
            )
        }

    }
}

export default Ask;