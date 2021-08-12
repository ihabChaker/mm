import React, { Component } from 'react';
import { Polar as PolarChart } from 'react-chartjs-2';

// polar-chart
function polarChart() {
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
// Options
const options = {
    title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
    }
}

class Polar extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            data: polarChart(),
            open: true,
        }
    };
    render() {
        return (
            <div className="col-xl-6 col-md-12">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6>Polar Chart</h6>
                    </div>
                    <div className="ms-panel-body">
                        <PolarChart data={this.state.data} options={options} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Polar;