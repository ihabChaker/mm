import React, { Component } from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { Line as LineChart } from 'react-chartjs-2';
import Channel from './Channel';
import Pageviews from './Pageviews';

var data_1 = [3800, 3900, 3300, 3800, 4000, 4200, 4400, 3800, 4600, 3900, 3800];
var data_2 = [2100, 3000, 2200, 2400, 2800, 2600, 2800, 2600, 2300, 2900, 2800];
var labels = ["12 AM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM", "12 PM", "2 PM", "6 PM", "8 AM", "10 PM"];
// audience-metrics-chart
function audiencemetricschart() {
    return {
        labels: labels,
        datasets: [{
            label: "Traffic",
            borderColor: '#357ffa',
            pointBorderWidth: 9,
            pointRadius: 9,
            pointBorderColor: 'transparent',
            pointHoverRadius: 8,
            pointHoverBorderWidth: 3,
            pointHoverBackgroundColor: 'white',
            pointHoverBorderColor: '#357ffa',
            pointBackgroundColor: 'transparent',
            fill: true,
            backgroundColor: "rgba(53,127,250,0.4)",
            borderWidth: 2,
            data: data_1
        },
        {
            label: "Sales",
            borderColor: '#ec4e3f',
            pointBorderWidth: 9,
            pointRadius: 9,
            pointBorderColor: 'transparent',
            pointHoverRadius: 8,
            pointHoverBorderWidth: 3,
            pointHoverBackgroundColor: 'white',
            pointHoverBorderColor: '#ec4e3f',
            pointBackgroundColor: 'transparent',
            fill: true,
            backgroundColor: "rgba(236, 78, 63,0.4)",
            borderWidth: 2,
            data: data_2
        }
        ]
    }
}
// Options
const options = {
    elements: {
        line: {
            tension: 0
        }
    },
    tooltips: {
        titleFontColor: '#3a3952',
        bodyFontFamily: 'Roboto',
        backgroundColor: '#FFF',
        bodyFontColor: '#878793',
        bodyFontSize: 14,
        displayColors: false,
        bodySpacing: 10,
        intersect: false,
        bodyFontStyle: 'bold',
        xPadding: 15,
        yPadding: 15,
        mode: 'index'
    },
    legend: {
        display: false,
        position: "top"
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
                beginAtZero: true,
                fontColor: "rgba(0,0,0,0.5)",
                fontStyle: "bold"
            }
        }]
    }
}

class Audience extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            data1: audiencemetricschart(),
            open: true,
        }
    };
    render() {
        return (
            <div className="col-xl-7 col-md-12">
                <div className="ms-panel">
                    <div className="ms-panel-header header-mini">
                        <div className="d-flex justify-content-between">
                            <h6>Website Audience Metrics</h6>
                            <ButtonToolbar>
                                <ToggleButtonGroup className="ms-graph-metrics" type="radio" name="options" defaultValue={1}>
                                    <ToggleButton variant="sm btn-outline-primary day" value={1}>Day</ToggleButton>
                                    <ToggleButton variant="sm btn-outline-primary month" value={2}>Month</ToggleButton>
                                    <ToggleButton variant="sm btn-outline-primary year" value={3}>Year</ToggleButton>
                                </ToggleButtonGroup>
                            </ButtonToolbar>
                        </div>
                        <div className="d-flex justify-content-between ms-graph-meta">
                            <ul className="ms-list-flex">
                                <li>
                                    <span>Page Views</span>
                                    <h3 className="ms-count">95,703</h3>
                                </li>
                                <li>
                                    <span>Bounce Rate</span>
                                    <h3 className="ms-count">19.03%</h3>
                                </li>
                                <li>
                                    <span>Sessions</span>
                                    <h3 className="ms-count">12,785</h3>
                                </li>
                            </ul>
                            <div className="ms-graph-labels">
                                <span className="ms-graph-decrease" />
                                <p>Traffic</p>
                                <span className="ms-graph-regular" />
                                <p>Sales</p>
                            </div>
                        </div>
                    </div>
                    <div className="ms-panel-body">
                        <LineChart data={this.state.data1} options={options} />
                    </div>
                </div>
                <Channel/>
                <Pageviews/>
            </div>
        );
    }
}

export default Audience;