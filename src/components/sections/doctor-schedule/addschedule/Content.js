import React, { Component } from 'react';
import Addform from './Addform';
import Breadcrumb from './Breadcrumb';
import Doctorblock from './Doctorblock';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <Breadcrumb/>
                    <Doctorblock/>
                    <Addform/>
                </div>
            </div>
        );
    }
}

export default Content;