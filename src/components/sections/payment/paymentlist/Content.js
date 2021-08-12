import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Paymentlist from './Paymentlist';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                        <Paymentlist/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;