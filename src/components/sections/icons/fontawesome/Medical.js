import React, { Component } from 'react';

class Medical extends Component {
    render() {
        return (
            <div className="col-md-12">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6>Medical Icons</h6>
                    </div>
                    <div className="ms-panel-body">
                        <div className="row ms-icons-list">
                            <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-ambulance" /> fa-ambulance</div>
                            <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-h-square" /> fa-h-square</div>
                            <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-hospital" /> fa-hospital</div>
                            <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-medkit" /> fa-medkit</div>
                            <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-plus-square" /> fa-plus-square</div>
                            <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-stethoscope" /> fa-stethoscope</div>
                            <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-user-md" /> fa-user-md</div>
                            <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-wheelchair" /> fa-wheelchair</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Medical;