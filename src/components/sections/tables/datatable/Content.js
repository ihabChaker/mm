import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Hoverable from './Hoverable';
import Responsive from './Responsive';
import Withheaderstrips from './Withheaderstrips';
import Withscroll from './Withscroll';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                        <Hoverable/>
                        <Withheaderstrips/>
                        <Withscroll/>
                        <Responsive/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;