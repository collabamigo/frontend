import ProjectCard from './ProjectCard.js';
import React from 'react';
import PropTypes from 'prop-types';

export default class Boxes extends React.Component {

    static propTypes = {
        boxesToRender: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    }

    shouldComponentUpdate ()
    {return true;}

    render() {
        if(this.props.boxesToRender === undefined){return null;}
        else if(this.props.boxesToRender.length === 0){return null;}
        else{
            return (
                <div className="">
                    <div className="row hello">
                        {this.props.boxesToRender.map((boxdata) => (
                            <div className= "p-2 col-6 fs-5">
                            <ProjectCard
                                element={boxdata}
                                key={boxdata}
                            />
                            </div>
                            ))}
                    </div>
                </div>
                );
            }
    }
}
