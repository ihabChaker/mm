import React, { Component } from 'react';

class Gradient extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6>Gradient Progress bars</h6>
                    </div>
                    <div className="ms-panel-body">
                        <p className="ms-directions">Use <code>.bg-gradient-{'{'}state{'}'}</code> in <code>.progress-bar</code></p>
                        <div className="progress">
                            <div className="progress-bar bg-gradient-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-gradient-info" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-gradient-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-gradient-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-gradient-dark" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-gradient-light" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gradient;