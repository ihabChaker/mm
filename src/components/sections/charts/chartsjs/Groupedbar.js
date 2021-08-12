import React, { Component } from 'react';
import { Bar as BarChart } from 'react-chartjs-2';

// bar-chart-grouped
function barchartgrouped() {
    return {
        labels: ["1900", "1950", "1999", "2050"],
        datasets: [
            {
                label: "Africa",
                backgroundColor: "#3e95cd",
                data: [133, 221, 783, 2478]
            }, {
                label: "Europe",
                backgroundColor: "#8e5ea2",
                data: [408, 547, 675, 734]
            }
        ]
    }
}
// Options
const options = {
    title: {
        display: true,
        text: 'Population growth (millions)'
    }
}

class Groupedbar extends Component {
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
                        <h6>Grouped Bar Chart</h6>
                    </div>
                    <div className="ms-panel-body">
                        <BarChart data={this.state.data} options={options} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Groupedbar;