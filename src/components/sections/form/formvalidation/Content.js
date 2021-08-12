import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Default from './Default';
import Fills from './Fills';
import Tooltip from './Tooltip';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                        <Default/>
                        <Fills/>
                        <Tooltip/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;