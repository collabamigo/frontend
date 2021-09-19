import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Image from 'react-bootstrap/Image';
import {logo} from "./ClubCard.module.css";
// import {no_suggestions, suggestion_active, suggestions, input} from './Autocomplete.module.css';


export default class ClubCard extends Component {
    static propTypes = {
        element: PropTypes.objectOf(PropTypes.string).isRequired,
    }

    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.handlechangemodalshow = this.handlechangemodalshow.bind(this);
        this.state = {modalshow: false,btnavail:true}
    }

    shouldComponentUpdate()
    { return true;}

    handler(event){
        this.handlechangebtnavail(event);
    }

    handlechangebtnavail() {
        this.setState((prevState) => ({ btnavail: !prevState.btnavail }))
        // this.setState({btnavail: !this.state.btnavail})
    }

    handlechangemodalshow() {
        this.setState((prevState) => ({ modalshow: !prevState.modalshow }))
        // this.setState({modalshow: !this.state.modalshow})
    }

    render() {
        console.log(this.props.element, " hiiii")
        if(this.props.element === undefined) {
            return null;
        }
        else{
        return (
            <div className="col-sm-6 col-lg-4 mb-3">
                <div className=" mb-3 h-100">

                    <div className="">

                        <Image
                            className={logo}
                            fluid
                            src={this.props.element.logo}
                        />

                        <h5 className="">
                            {this.props.element.name}
                        </h5>

                    </div>
                </div>
            </div>
            )
        }
    }
}