import React, { Component } from 'react';
import { Bar as BarChart } from 'react-chartjs-2';

// mixed-chart
function mixedchart() {
    return {
        labels: ["1900", "1950", "1999", "2050"],
        datasets: [{
            label: "Europe",
            type: "line",
            borderColor: "#8e5ea2",
            data: [408, 547, 675, 734],
            fill: false
        }, {
            label: "Africa",
            type: "line",
            borderColor: "#3e95cd",
            data: [133, 221, 783, 2478],
            fill: false
        }, {
            label: "Europe",
            type: "bar",
            backgroundColor: "#ff6c60",
            data: [408, 547, 675, 734],
        }, {
            label: "Africa",
            type: "bar",
            backgroundColor: "#f7b11b",
            backgroundColorHover: "#3e95cd",
            data: [133, 221, 783, 2478]
        }
        ]
    }
}
// Options
const options = {
    title: {
        display: true,
        text: 'Population growth (millions): Europe & Africa'
    },
    legend: { display: false }
}

class Mixed extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            data: mixedchart(),
            open: true,
        }
    };
    render() {
        return (
            <div className="col-xl-6 col-md-12">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6>Mixed Chart</h6>
                    </div>
                    <div className="ms-panel-body">
                        <BarChart data={this.state.data} options={options} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Mixed;