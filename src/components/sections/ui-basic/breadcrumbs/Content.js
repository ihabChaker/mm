import React, { Component } from 'react';
import Arrow from './Arrow';
import Breadcrumb from './Breadcrumb';
import Default from './Default';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <Breadcrumb />
                    <div className="col-md-12">
                        <Default />
                        <Arrow/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;