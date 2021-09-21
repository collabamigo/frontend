import ClubCard from './ClubCard.js';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Boxes extends Component {
    static propTypes = {
        boxesToRender : PropTypes.arrayOf(PropTypes.object).isRequired,
    }

    shouldComponentUpdate () 
    {return true;}

    render() {
        if(this.props.boxesToRender === undefined){return null;}
        else if(this.props.boxesToRender.length === 0){return null;}
        else{
            return (
                <div className="container">
                    <div className="row">
                        {this.props.boxesToRender.map((boxdata) => (
                            <ClubCard
                                element={boxdata}
                                key={boxdata}
                            />
                            ))}
                    </div>
                </div>
                );
            }
    }
}