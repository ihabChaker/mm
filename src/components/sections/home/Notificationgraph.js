import React, { Component } from 'react';
import { Line as LineChart } from 'react-chartjs-2';

// line-chart-2
function linecharttwo() {
    return {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        datasets: [{
            label: "Data",
            borderColor: '#009efb',
            pointBorderColor: '#009efb',
            pointBackgroundColor: '#009efb',
            pointHoverBackgroundColor: '#009efb',
            pointHoverBorderColor: '#009efb',
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            fill: true,
            backgroundColor: "rgba(0, 158, 251, 0.50)",
            borderWidth: 2,
            data: [1, 4, 7, 3, 1, 7, 2, 5, 8, 3, 7, 5, 4, 3, 7]
        }]
    }
}
// line-chart-3
function linechartthree() {
    return {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        datasets: [{
            label: "Data",
            borderColor: '#009efb',
            pointBorderColor: '#009efb',
            pointBackgroundColor: '#009efb',
            pointHoverBackgroundColor: '#009efb',
            pointHoverBorderColor: '#009efb',
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            fill: true,
            backgroundColor: "rgba(0, 158, 251, 0.50)",
            borderWidth: 2,
            data: [5, 6, 8, 1, 5, 3, 9, 7, 5, 8, 7, 3, 6, 9, 1]
        }]
    }
}
// line-chart-4
function linechartfour() {
    return {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        datasets: [{
            label: "Data",
            borderColor: '#009efb',
            pointBorderColor: '#009efb',
            pointBackgroundColor: '#009efb',
            pointHoverBackgroundColor: '#009efb',
            pointHoverBorderColor: '#009efb',
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            fill: true,
            backgroundColor: "rgba(0, 158, 251, 0.50)",
            borderWidth: 2,
            data: [1, 4, 7, 3, 5, 7, 6, 5, 8, 3, 5, 5, 4, 3, 7]
        }]
    }
}
// Options
const options = {
    elements: {
        line: {
            tension: 0
        }
    },
    legend: {
        display: false,
        position: "bottom"
    },
    scales: {
        yAxes: [{
            display: false,
        }],
        xAxes: [{
            display: false,
        }]
    }
}
class Notificationgraph extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            data2: linecharttwo(),
            data3: linechartthree(),
            data4: linechartfour(),
            open: true,
        }
    };
    render() {
        return (
            <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="ms-card ms-widget has-graph-full-width ms-infographics-widget">
                    <div className="ms-card-body media">
                        <div className="media-body">
                            <h6 className="bold">Appointments</h6>
                            <h3><strong>3,973</strong></h3>
                        </div>
                    </div>
                    <LineChart data={this.state.data2} options={options} />
                </div>
                <div className="ms-card ms-widget has-graph-full-width ms-infographics-widget">
                    <div className="ms-card-body media">
                        <div className="media-body">
                            <h6>New Patients</h6>
                            <h3><strong>593</strong></h3>
                        </div>
                    </div>
                    <LineChart data={this.state.data3} options={options} />
                </div>
                <div className="ms-card ms-widget has-graph-full-width ms-infographics-widget">
                    <div className="ms-card-body media">
                        <div className="media-body">
                            <h6 className="bold">Hospital Earning</h6>
                            <h3><strong>3,973</strong></h3>
                        </div>
                    </div>
                    <LineChart data={this.state.data4} options={options} />
                </div>
            </div>
        );
    }
}

export default Notificationgraph;