import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import General from './General';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                    </div>
                    <General/>
                </div>
            </div>
        );
    }
}

export default Content;