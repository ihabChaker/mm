import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Patientlist from './Patientlist';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                        <Patientlist/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;