import React, { Component } from 'react';
import { Bar as BarChart } from 'react-chartjs-2';

// bar-chart
function barchart() {
    return {
        labels: ["Emergency", "ICU", "Neurology", "Cardiology", "Gynaecology"],
        datasets: [
            {
                label: "Employes",
                backgroundColor: ["#357ffa", "#f7b11b", "#ff6c60", "#8663e1", "#08bf6f"],
                data: [478, 1267, 1734, 2384, 133]
            }
        ]
    }
}
// Options
const options = {
    legend: { display: false },
    title: {
        display: true,
        text: 'Maximum number of employes in departments'
    }
}

class Employees extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            data: barchart(),
            open: true,
        }
    };
    render() {
        return (
            <div className="col-xl-6 col-lg-12 col-md-12">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6>Employes</h6>
                    </div>
                    <div className="ms-panel-body">
                        <BarChart data={this.state.data} options={options} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Employees;