import React, { Component, Fragment } from 'react';
import { Line as LineChart } from 'react-chartjs-2';

var data_1 = [4100, 3800, 3200, 3400, 2700, 3600, 3300, 3700, 4900];
var data_2 = [2800, 2600, 2300, 2800, 3600, 2900, 3000, 3100, 3600, 3000, 3100, 3200];
var labels = ["Jan-11", "Jan-12", "Jan-13", "Jan-14", "Jan-15", "Jan-16", "Jan-17", "Jan-18", "Jan-19"];
var labels2 = ["Jan-11", "Jan-12", "Jan-13", "Jan-14", "Jan-15", "Jan-16", "Jan-17", "Jan-18", "Jan-19", "Jan-20", "Jan-21", "Jan-22"];
// line-chart
function linechart() {
    return {
        labels: labels,
        datasets: [{
            label: "Data",
            borderColor: '#F7931A',
            pointBorderColor: '#F7931A',
            pointBackgroundColor: '#F7931A',
            pointHoverBackgroundColor: '#F7931A',
            pointHoverBorderColor: '#F7931A',
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            fill: true,
            backgroundColor: "rgba(247, 147, 26,0.2)",
            borderWidth: 2,
            data: data_1
        }]
    }
}
// line-chart-2
function linecharttwo() {
    return {
        labels: labels2,
        datasets: [{
            label: "Data",
            borderColor: '#07be6e',
            pointBorderColor: '#07be6e',
            pointBackgroundColor: '#07be6e',
            pointHoverBackgroundColor: '#07be6e',
            pointHoverBorderColor: '#07be6e',
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            fill: true,
            backgroundColor: "rgba(7, 190, 110,0.3)",
            borderWidth: 2,
            data: data_2
        }]
    }
}
// line-chart-3
function linechartthree() {
    return {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        datasets: [{
            label: "Data",
            borderColor: '#e5a93d',
            pointBorderColor: '#e5a93d',
            pointBackgroundColor: '#e5a93d',
            pointHoverBackgroundColor: '#e5a93d',
            pointHoverBorderColor: '#e5a93d',
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            fill: true,
            backgroundColor: "rgba(229, 169, 61,0.2)",
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
            borderColor: '#3FA30C',
            pointBorderColor: '#3FA30C',
            pointBackgroundColor: '#3FA30C',
            pointHoverBackgroundColor: '#3FA30C',
            pointHoverBorderColor: '#3FA30C',
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            fill: true,
            backgroundColor: "rgba(63, 163, 12,0.2)",
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
class Infographics extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            data1: linechart(),
            data2: linecharttwo(),
            data3: linechartthree(),
            data4: linechartfour(),
            open: true,
        }
    };
    render() {
        return (
            <Fragment>
                <div className="col-xl-3 col-md-6">
                    <div className="ms-card ms-widget has-graph-full-width ms-infographics-widget">
                        <span className="ms-chart-label bg-success"><i className="material-icons">arrow_upward</i> 3.2%</span>
                        <div className="ms-card-body media">
                            <div className="media-body">
                                <span>Upsells Graph</span>
                                <h2>8,451</h2>
                            </div>
                        </div>
                        <LineChart data={this.state.data1} options={options} />
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="ms-card ms-widget has-graph-full-width ms-infographics-widget">
                        <span className="ms-chart-label bg-danger"><i className="material-icons">arrow_downward</i> 4.5%</span>
                        <div className="ms-card-body media">
                            <div className="media-body">
                                <span>Conversions Graph</span>
                                <h2>$3,973</h2>
                            </div>
                        </div>
                        <LineChart data={this.state.data2} options={options} />
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="ms-card ms-widget has-graph-full-width ms-infographics-widget">
                        <span className="ms-chart-label bg-success"><i className="material-icons">arrow_upward</i> 12.5%</span>
                        <div className="ms-card-body media">
                            <div className="media-body">
                                <span>Affiliate Graph</span>
                                <h2>7,333</h2>
                            </div>
                        </div>
                        <LineChart data={this.state.data3} options={options} />
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="ms-card ms-widget has-graph-full-width ms-infographics-widget">
                        <span className="ms-chart-label bg-success"><i className="material-icons">arrow_upward</i> 9.5%</span>
                        <div className="ms-card-body media">
                            <div className="media-body">
                                <span>Visitor Graph</span>
                                <h2>48,973</h2>
                            </div>
                        </div>
                        <LineChart data={this.state.data4} options={options} />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Infographics;