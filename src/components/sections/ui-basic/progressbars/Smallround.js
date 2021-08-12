import React, { Component } from 'react';

class Smallround extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="ms-panel ms-panel-fh">
                    <div className="ms-panel-header">
                        <h6>Small Round Progress Bars</h6>
                    </div>
                    <div className="ms-panel-body">
                        <p className="ms-directions">Use <code>.progress-round-tiny</code> in <code>.progress-circle</code></p>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="progress-rounded progress-round-tiny">
                                    <div className="progress-value">12%</div>
                                    <svg>
                                        <circle className="progress-cicle bg-success" cx={65} cy={65} r={57} strokeWidth={4} fill="none" aria-valuenow={12} aria-orientation="vertical" aria-valuemin={0} aria-valuemax={100} role="slider" style={{"strokeDashoffset": ( 358.141563 - (358.141563 / 100) * 12) + 'px'}} >
                                        </circle>
                                    </svg>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="progress-rounded progress-round-tiny">
                                    <div className="progress-value">38.8%</div>
                                    <svg>
                                        <circle className="progress-cicle bg-primary" cx={65} cy={65} r={57} strokeWidth={4} fill="none" aria-valuenow="38.8" aria-orientation="vertical" aria-valuemin={0} aria-valuemax={100} role="slider" style={{"strokeDashoffset": ( 358.141563 - (358.141563 / 100) * 38.8) + 'px'}} >
                                        </circle>
                                    </svg>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="progress-rounded progress-round-tiny">
                                    <div className="progress-value">78.8%</div>
                                    <svg>
                                        <circle className="progress-cicle bg-secondary" cx={65} cy={65} r={57} strokeWidth={4} fill="none" aria-valuenow="78.8" aria-orientation="vertical" aria-valuemin={0} aria-valuemax={100} role="slider" style={{"strokeDashoffset": ( 358.141563 - (358.141563 / 100) * 78.8) + 'px'}} >
                                        </circle>
                                    </svg>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="progress-rounded progress-round-tiny">
                                    <div className="progress-value">100%</div>
                                    <svg>
                                        <circle className="progress-cicle bg-dark" cx={65} cy={65} r={57} strokeWidth={4} fill="none" aria-valuenow={100} aria-orientation="vertical" aria-valuemin={0} aria-valuemax={100} role="slider" style={{"strokeDashoffset": ( 358.141563 - (358.141563 / 100) * 100) + 'px'}} >
                                        </circle>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Smallround;