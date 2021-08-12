import React, { Component } from 'react';
import { Pie as PieChart } from 'react-chartjs-2';

// pie-chart
function piechart() {
    return {
        labels: ["Emergency", "ICU", "Neurology", "Cardiology", "Gynaecology"],
        datasets: [{
            label: "Population (millions)",
            backgroundColor: ["#357ffa", "#f7b11b", "#ff6c60", "#8663e1", "#08bf6f"],
            data: [2478, 5267, 734, 784, 433]
        }]
    }
}
// Options
const options = {
    title: {
        display: true,
        text: 'Number of staffs according to deparments'
    }
}

class Totaldepartments extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            data: piechart(),
            open: true,
        }
    };
    render() {
        return (
            <div className="col-xl-6 col-lg-12 col-md-12">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6>Total Departments</h6>
                    </div>
                    <div className="ms-panel-body">
                        <PieChart data={this.state.data} options={options} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Totaldepartments;