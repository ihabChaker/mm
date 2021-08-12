import React, { Component } from 'react';
import { Bar as BarChart } from 'react-chartjs-2';

// bar-chart
function barchart() {
    return {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
            {
                label: "Population (millions)",
                backgroundColor: ["#357ffa", "#f7b11b", "#ff6c60", "#8663e1", "#08bf6f"],
                data: [2478, 5267, 1734, 3384, 1433]
            }
        ]
    }
}
// Options
const options = {
    legend: { display: false },
    title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
    }
}
class Bar extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            data: barchart(),
            open: true,
        }
    };
    render() {
        return (
            <div className="col-xl-6 col-md-12">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6>Bar Chart</h6>
                    </div>
                    <div className="ms-panel-body">
                        <BarChart data={this.state.data} options={options} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Bar;