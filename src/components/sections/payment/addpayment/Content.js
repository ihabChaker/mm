import React, { Component } from 'react';
import Addform from './Addform';
import Breadcrumb from './Breadcrumb';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                    </div>
                    <Addform/>
                </div>  
            </div>
        );
    }
}

export default Content;