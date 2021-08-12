import React, { Component } from 'react';
import { Pie as PieChart } from 'react-chartjs-2';

// pie-chart
function piechart() {
    return {
        labels: ["USA", "Germany", "UK", "Russia", "France"],
        datasets: [{
            label: "Users (thousands)",
            backgroundColor: ["#357ffa", "#f7b11b", "#ff6c60", "#8663e1", "#08bf6f"],
            data: [725, 890, 729, 316, 275]
        }]
    }
}
// Options
const options = {
    title: {
        display: false,
        text: 'Users By Country'
    },
    legend: {
        display: false
    },
}
class Usergraph extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            data1: piechart(),
            open: true,
        }
    };
    render() {
        return (
            <div className="col-xl-6 col-md-12">
                <div className="ms-panel ms-panel-fh">
                    <div className="ms-panel-header">
                        <h6>Users</h6>
                        <p>Users by country visualized</p>
                    </div>
                    <div className="ms-panel-body">
                        <div className="row">
                            <div className="col-xl-4 col-md-4">
                                <div className="ms-graph-labels column-direction">
                                    <div className="ms-chart-no-label">
                                        <span className="bg-success" />
                                        <p>$9,348,319</p>
                                    </div>
                                    <div className="ms-chart-no-label">
                                        <span className="bg-primary" />
                                        <p>$4,344,316</p>
                                    </div>
                                    <div className="ms-chart-no-label">
                                        <span className="bg-warning" />
                                        <p>$518,513</p>
                                    </div>
                                    <div className="ms-chart-no-label">
                                        <span className="bg-danger" />
                                        <p>$348,319</p>
                                    </div>
                                    <div className="ms-chart-no-label">
                                        <span className="bg-secondary" />
                                        <p>$3,416,139</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-md-8">
                                <PieChart data={this.state.data1} options={options} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Usergraph;