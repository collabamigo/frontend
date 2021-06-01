import React from "react";
import Chart from "react-google-charts";
import PropTypes from "prop-types";

class DashBoard extends React.Component {
    static propTypes = {
        skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    }
    shouldComponentUpdate () {
        return false;
    }


    render () {
        return (
            <div>
                <h1>
                    Dashboard
                    <span className="material-icons">
                        dashboard
                    </span>
                </h1>
                
                <div>

                    <Chart
                        chartType="PieChart"
                        data={[
                        ["hello", 'Percentage covered'],
                        [this.props.skills[1], 53],
                        [this.props.skills[2], 83],
                        [this.props.skills[0], 20],
                      ]}
                        height='500px'
                        loader={
                            <div>
                                Loading Chart
                            </div>
                        }
                        options={{
                        // title: 'Work Summary',
                        legend: 'none',
                        pieSliceText: 'label',
                        slices: {
                          4: { offset: 0.2 },
                          12: { offset: 0.3 },
                          14: { offset: 0.5 },
                          15: { offset: 0.2 },
                        },
                      }}
                        rootProps={{ 'data-testid': '5' }}
                        width='400px'
                    />
                </div>
            </div>
        );
    }
}

export default DashBoard;
