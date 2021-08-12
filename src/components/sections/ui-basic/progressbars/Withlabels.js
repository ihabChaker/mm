import React, { Component } from 'react';

class Withlabels extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="ms-panel ms-panel-fh">
                    <div className="ms-panel-header">
                        <h6>Progress bars with labels</h6>
                    </div>
                    <div className="ms-panel-body">
                        <span className="progress-label">Project 1</span>
                        <div className="progress">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                        </div>
                        <span className="progress-label">Project 2</span>
                        <div className="progress">
                            <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>50%</div>
                        </div>
                        <span className="progress-label">Project 3</span>
                        <div className="progress">
                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>75%</div>
                        </div>
                        <span className="progress-label">Project 4</span>
                        <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>100%</div>
                        </div>
                        <span className="progress-label">Project 5</span>
                        <div className="progress">
                            <div className="progress-bar bg-dark" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>75%</div>
                        </div>
                        <span className="progress-label">Project 6</span>
                        <div className="progress">
                            <div className="progress-bar bg-light" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>40%</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Withlabels;