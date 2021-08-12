import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import AddForm from './AddForm';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <Breadcrumb/>
                    <AddForm/>
                </div>
            </div>
        );
    }
}

export default Content;