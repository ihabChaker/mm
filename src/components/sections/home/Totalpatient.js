import React, { Component } from 'react';
import { Line as LineChart } from 'react-chartjs-2';

// line-chart
function linechart() {
    return {
        labels: ["Jan-11", "Jan-12", "Jan-13", "Jan-14", "Jan-15", "Jan-16", "Jan-17", "Jan-18", "Jan-19"],
        datasets: [{
            label: "Patient",
            borderColor: '#009efb',
            pointBorderColor: '#009efb',
            pointBackgroundColor: '#009efb',
            pointHoverBackgroundColor: '#009efb',
            pointHoverBorderColor: '#009efb',
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 2,
            fill: true,
            backgroundColor: "rgba(0, 158, 251, 0.50)",
            borderWidth: 1,
            data: [1800, 1600, 2300, 2800, 3600, 2900, 3000, 3800, 3600]
        }]
    }
}
// Options
const options = {
    legend: {
        display: false,
        position: "bottom"
    },
    scales: {
        yAxes: [{
            ticks: {
                fontColor: "rgba(0,0,0,0.5)",
                fontStyle: "bold",
                beginAtZero: true,
                maxTicksLimit: 200,
                padding: 20
            },
            gridLines: {
                drawTicks: false,
                display: false
            }

        }],
        xAxes: [{
            gridLines: {
                zeroLineColor: "transparent"
            },
            ticks: {
                padding: 20,
                fontColor: "rgba(0,0,0,0.5)",
                fontStyle: "bold"
            }
        }]
    }
}

class Totalpatient extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            data: linechart(),
            open: true,
        }
    };
    render() {
        return (
            <div className="col-xl-6 col-md-12">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6>Patient Total</h6>
                    </div>
                    <div className="ms-panel-body">
                        <LineChart data={this.state.data} options={options} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Totalpatient;