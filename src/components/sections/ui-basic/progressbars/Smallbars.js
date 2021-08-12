import React, { Component } from 'react';

class Smallbars extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="ms-panel ms-panel-fh">
                    <div className="ms-panel-header">
                        <h6>Small Progress Bars</h6>
                    </div>
                    <div className="ms-panel-body">
                        <p className="ms-directions">Use <code>.progress-tiny</code> in <code>.progress</code></p>
                        <span className="progress-label">Project 1</span><span className="progress-status">25%</span>
                        <div className="progress progress-tiny">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span className="progress-label">Project 2</span><span className="progress-status">50%</span>
                        <div className="progress progress-tiny">
                            <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span className="progress-label">Project 3</span><span className="progress-status">75%</span>
                        <div className="progress progress-tiny">
                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span className="progress-label">Project 4</span><span className="progress-status">100%</span>
                        <div className="progress progress-tiny">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span className="progress-label">Project 5</span><span className="progress-status">75%</span>
                        <div className="progress progress-tiny">
                            <div className="progress-bar bg-dark" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span className="progress-label">Project 6</span><span className="progress-status">40%</span>
                        <div className="progress progress-tiny">
                            <div className="progress-bar bg-light" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Smallbars;