/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/sort-prop-types */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Tab0 from './tab0';
import Tab1 from './tab0';
import Tab2 from './tab2';


export default class index extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        batch: PropTypes.number.isRequired,
        course: PropTypes.string.isRequired,

        project_name: PropTypes.string.isRequired,
        project_description: PropTypes.string.isRequired,
        project_tags: PropTypes.arrayOf(PropTypes.string).isRequired,

        team_size : PropTypes.number.isRequired,
        team_member_names: PropTypes.arrayOf(PropTypes.string).isRequired,
        team_member_emails: PropTypes.arrayOf(PropTypes.string).isRequired,

        date_of_est: PropTypes.instanceOf(Date).isRequired,
        
    }

    constructor(props){
        super(props);

        this.state = {
            step_number: 0,
            next: true,
            prev: false,
        }

        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);

    }




    shouldComponentUpdate(){
        return true;
    }

    handleNext(){
        if(this.state.step_number < 2){
            this.setState((prevState) => ({ step_number: prevState.step_number + 1 }))
        }
        else if(this.state.step_number == 2){
            this.setState({
                next:false,
                prev: true
            })
        }
        console.log(this.state.step_number);
    }

    handlePrev(){
        if(this.state.step_number > 0){
            this.setState((prevState) => ({ step_number: prevState.step_number - 1 }))
        }
        else if(this.state.step_number == 0){
            this.setState({
                next:true,
                prev: false
            })
        }
        console.log(this.state.step_number);

    }


    render() {
        return (
            <section className="bg-gradient">
                {this.state.step_number === 0 ? 
                    <Tab0 
                        batch={this.props.batch}
                        course={this.props.course}
                        name={this.props.name}
                    /> : null}

                {this.state.step_number === 1 ? 
                    <Tab1 
                        batch={this.props.batch}
                        course={this.props.course}
                        name={this.props.name}
                    /> : null}

                {this.state.step_number === 2 ? 
                    <Tab2
                        batch={this.props.batch}
                        course={this.props.course}
                        name={this.props.name} 
                    /> : null}
                
                <div className="row">
                    <button
                        className="col-md-6 btn btn-primary mt-2 ml-1"
                        disabled={!this.state.prev}
                        onClick={this.handlePrev}
                        type="button"

                    >
                        Prev
                    </button>

                    <button
                        className="col-md-6 btn btn-primary mt-2 ml-1"
                        disabled={!this.state.next}
                        onClick={this.handleNext}
                        type="button"

                    >
                        Next
                    </button>

                </div>
                
            </section>
        )
    }
}
