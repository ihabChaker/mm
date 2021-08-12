import React, { Component } from 'react';
import { Line as LineChart } from 'react-chartjs-2';

var trend_1 = [1, 3, 5, 4, 3, 3, 4, 8, 5];
var trend_2 = [3, 2, 5, 4, 8, 4, 5, 2, 3];
var trend_3 = [7, 5, 4, 5, 4, 7, 5, 5, 4];
var trend_4 = [3, 3, 4, 6, 7, 6, 6, 4, 3];
var trend_5 = [5, 4, 6, 7, 6, 5, 5, 7, 4];
var labels = ["Jan-11", "Jan-12", "Jan-13", "Jan-14", "Jan-15", "Jan-16", "Jan-17", "Jan-18", "Jan-19"];
// trend 01
function trendone() {
    return {
        labels: labels,
        datasets: [{
            label: "Data",
            borderColor: '#07be6e',
            backgroundColor: 'transparent',
            borderWidth: 2,
            data: trend_1
        }]
    }
}
// trend 02
function trendtwo() {
    return {
        labels: labels,
        datasets: [{
            label: "Data",
            borderColor: '#ec4e3f',
            backgroundColor: 'transparent',
            borderWidth: 2,
            data: trend_2
        }]
    }
}
// trend 03
function trendthree() {
    return {
        labels: labels,
        datasets: [{
            label: "Data",
            borderColor: '#07be6e',
            backgroundColor: 'transparent',
            borderWidth: 2,
            data: trend_3
        }]
    }
}
// trend 04
function trendfour() {
    return {
        labels: labels,
        datasets: [{
            label: "Data",
            borderColor: '#07be6e',
            backgroundColor: 'transparent',
            borderWidth: 2,
            data: trend_4
        }]
    }
}
// trend 05
function trendfive() {
    return {
        labels: labels,
        datasets: [{
            label: "Data",
            borderColor: '#ec4e3f',
            backgroundColor: 'transparent',
            borderWidth: 2,
            data: trend_5
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
            display: false,
        }],
        xAxes: [{
            display: false,
        }]
    },
    elements: {
        point: {
            radius: 0
        }
    }
}

class Conference extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            data1: trendone(),
            data2: trendtwo(),
            data3: trendthree(),
            data4: trendfour(),
            data5: trendfive(),
            open: true,
        }
    };
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Hospital Conference</h6>
                </div>
                <div className="ms-panel-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover thead-primary">
                            <thead>
                                <tr>
                                    <th scope="col">Topic</th>
                                    <th scope="col">Sessions</th>
                                    <th scope="col">Previous Period</th>
                                    <th scope="col">Change</th>
                                    <th scope="col">Growth</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Medicine</td>
                                    <td>11</td>
                                    <td>10 Month</td>
                                    <td className="ms-text-success">+17.24%</td>
                                    <td className="ms-trend">
                                        <LineChart data={this.state.data1} options={options} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>VIP Rooms</td>
                                    <td>09</td>
                                    <td>5 Month</td>
                                    <td className="ms-text-danger">-2.33%</td>
                                    <td className="ms-trend">
                                        <LineChart data={this.state.data2} options={options} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>OPD</td>
                                    <td>20</td>
                                    <td>10 Month</td>
                                    <td className="ms-text-success">+1.97%</td>
                                    <td className="ms-trend">
                                        <LineChart data={this.state.data3} options={options} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Doctor</td>
                                    <td>12</td>
                                    <td>2 Month</td>
                                    <td className="ms-text-success">+7.14%</td>
                                    <td className="ms-trend">
                                        <LineChart data={this.state.data4} options={options} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>General Rooms</td>
                                    <td>13</td>
                                    <td>6 Month</td>
                                    <td className="ms-text-danger">-27.45%</td>
                                    <td className="ms-trend">
                                        <LineChart data={this.state.data5} options={options} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Conference;