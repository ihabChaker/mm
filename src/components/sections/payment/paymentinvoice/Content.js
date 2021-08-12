import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Invoice from './Invoice';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                        <Invoice/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;