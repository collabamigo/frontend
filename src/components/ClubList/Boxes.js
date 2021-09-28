import ClubCard from './ClubCard.js';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Boxes extends Component {
    static propTypes = {
        Type: PropTypes.string.isRequired,
        boxesToRender : PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
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
                                Type={this.props.Type}
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
