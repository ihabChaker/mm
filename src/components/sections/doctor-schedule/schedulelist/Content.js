import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Schedulelist from './Schedulelist';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <Breadcrumb/>
                    <Schedulelist/>
                </div>
            </div>
        );
    }
}

export default Content; 