import React, { Component } from 'react';

class Sellingsproject extends Component {
    render() {
        return (
            <div className="col-xl-5 col-md-12">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6>most sellings projects</h6>
                    </div>
                    <div className="ms-panel-body">
                        <span className="progress-label">HTML &amp; CSS Projects</span><span className="progress-status">83%</span>
                        <div className="progress progress-tiny">
                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: '83%' }} aria-valuenow={83} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span className="progress-label">Wordpress Projects</span><span className="progress-status">50%</span>
                        <div className="progress progress-tiny">
                            <div className="progress-bar bg-secondary" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span className="progress-label">PSD Projects</span><span className="progress-status">75%</span>
                        <div className="progress progress-tiny">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span className="progress-label">Code Snippets</span><span className="progress-status">92%</span>
                        <div className="progress progress-tiny">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '92%' }} aria-valuenow={92} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                </div>
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6>Top Sales</h6>
                        <p>Your highest selling projects</p>
                    </div>
                    <div className="ms-panel-body p-0">
                        <div className="ms-quick-stats">
                            <div className="ms-stats-grid">
                                <p className="ms-text-success">+47.18%</p>
                                <p className="ms-text-dark">8,033</p>
                                <span>Admin Dashboard</span>
                            </div>
                            <div className="ms-stats-grid">
                                <p className="ms-text-success">+17.24%</p>
                                <p className="ms-text-dark">6,039</p>
                                <span>Wordpress Theme</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sellingsproject;