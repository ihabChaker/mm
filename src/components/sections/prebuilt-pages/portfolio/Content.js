import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Default from './Default';
import Minimal from './Minimal';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                        <Default/>
                        <Minimal/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;