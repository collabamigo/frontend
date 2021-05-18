import React from "react";
import Chart from "react-google-charts";

class DashBoard extends React.Component {

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
                        ['Work', 'Percentage covered'],
                        ['Java', 13],
                        ['Python', 83],
                        ['SVM', 1.4],
                        ['ML', 23],
                        ['KNN', 46],
                        ['Open Cv', 300],
                        ['Git', 38],
                        ['C++', 5.5],
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
