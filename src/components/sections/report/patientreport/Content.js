import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Reportlist from './Reportlist';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                    </div>
                    <Reportlist/>
                </div>
            </div> 
        );
    }
}

export default Content;