import React, { Component } from 'react';
import { Doughnut as DoughnutChart } from 'react-chartjs-2';

// doughnut-chart
function doughnutChart() {
    return {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
            {
                label: "Population (millions)",
                backgroundColor: ["#357ffa", "#f7b11b", "#ff6c60", "#8663e1", "#08bf6f"],
                data: [2478, 5267, 734, 784, 433]
            }
        ]
    }
}
const options = {
    title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
    }
}

class Dougnut extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            data: doughnutChart(),
            open: true,
        }
    };
    render() {
        return (
            <div className="col-xl-6 col-md-12">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6>Dougnut Chart</h6>
                    </div>
                    <div className="ms-panel-body">
                        <DoughnutChart data={this.state.data} options={options} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dougnut;