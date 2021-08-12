import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Default from './Default';
import Outline from './Outline';
import Defaultwithicon from './Defaultwithicon';
import Outlinewithicon from './Outlinewithicon';
import Solid from './Solid';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12"> 
                        <Breadcrumb />
                        <Default />
                        <Outline />
                        <Defaultwithicon />
                        <Outlinewithicon />
                        <Solid />
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;