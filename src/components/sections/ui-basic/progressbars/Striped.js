import React, { Component } from 'react';

class Striped extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6>Striped Progress bars</h6>
                    </div>
                    <div className="ms-panel-body">
                        <p className="ms-directions">Use <code>.progress-bar-striped</code> in <code>.progress-bar</code></p>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-light" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Striped;