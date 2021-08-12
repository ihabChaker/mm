import React, { Component } from 'react';
import { Bar as BarChart } from 'react-chartjs-2';

// bar-chart-grouped
function barchartgrouped() {
    return {
        labels: ["1900", "1950", "1999", "2050"],
        datasets: [
            {
                label: "ICU",
                backgroundColor: "#009efb",
                data: [133, 221, 783, 2478]
            }, {
                label: "OPD",
                backgroundColor: "#4f8dca",
                data: [408, 547, 675, 734]
            }
        ]
    }
}
// Options
const options = {
    title: {
        display: true,
        text: 'Patient In'
    }
}


class Patientin extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            data: barchartgrouped(),
            open: true,
        }
    };
    render() {
        return (
            <div className="col-xl-6 col-md-12">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6>Patient In</h6>
                    </div>
                    <div className="ms-panel-body">
                        <BarChart data={this.state.data} options={options} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Patientin;