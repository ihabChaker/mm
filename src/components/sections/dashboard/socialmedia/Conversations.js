import React, { Component } from 'react';

class Conversations extends Component {
    render() {
        return (
            <div className="col-xl-8 col-md-12">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <div className=" d-flex justify-content-between">
                            <div className="ms-header-text">
                                <h6>Social Media Conversations</h6>
                                <p>Track your social media conversations</p>
                            </div>
                            <button type="button" className="btn btn-outline-primary ms-graph-metrics" name="button">Link New Source</button>
                        </div>
                    </div>
                    <div className="ms-panel-body p-0">
                        <div className="table-responsive">
                            <table className="table table-bordered mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col">Source</th>
                                        <th scope="col" colSpan={3}>Conversation</th>
                                        <th scope="col" colSpan={2}>Sessions</th>
                                        <th scope="col">Avg. Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Facebook</td>
                                        <td className="w-25">
                                            <div className="progress">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </td>
                                        <td>76</td>
                                        <td className="ms-text-success">+64</td>
                                        <td>76</td>
                                        <td className="ms-text-success">+64</td>
                                        <td>9.12%</td>
                                    </tr>
                                    <tr>
                                        <td>Twitter</td>
                                        <td className="w-25">
                                            <div className="progress">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '60%' }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </td>
                                        <td>26</td>
                                        <td className="ms-text-success">+10</td>
                                        <td>26</td>
                                        <td className="ms-text-success">+10</td>
                                        <td>7.65%</td>
                                    </tr>
                                    <tr>
                                        <td>Linkedin</td>
                                        <td className="w-25">
                                            <div className="progress">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </td>
                                        <td>14</td>
                                        <td className="ms-text-success">+7</td>
                                        <td>14</td>
                                        <td className="ms-text-success">+7</td>
                                        <td>14.29%</td>
                                    </tr>
                                    <tr>
                                        <td>Google +</td>
                                        <td className="w-25">
                                            <div className="progress">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '20%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </td>
                                        <td>12</td>
                                        <td className="ms-text-danger">-8</td>
                                        <td>12</td>
                                        <td className="ms-text-danger">-8</td>
                                        <td>10.99%</td>
                                    </tr>
                                    <tr>
                                        <td>Instagram</td>
                                        <td className="w-25">
                                            <div className="progress">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '15%' }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </td>
                                        <td>4</td>
                                        <td className="ms-text-success">+2</td>
                                        <td>4</td>
                                        <td className="ms-text-success">+2</td>
                                        <td>22.35%</td>
                                    </tr>
                                    <tr>
                                        <td>Youtube</td>
                                        <td className="w-25">
                                            <div className="progress">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '45%' }} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </td>
                                        <td>86</td>
                                        <td className="ms-text-danger">-33</td>
                                        <td>86</td>
                                        <td className="ms-text-danger">-33</td>
                                        <td>34.12%</td>
                                    </tr>
                                    <tr>
                                        <td>Skype</td>
                                        <td className="w-25">
                                            <div className="progress">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </td>
                                        <td>23</td>
                                        <td className="ms-text-success">+48</td>
                                        <td>23</td>
                                        <td className="ms-text-success">+48</td>
                                        <td>3.75%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Conversations;