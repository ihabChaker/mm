import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Default from './Default';
import Withgap from './Withgap';
import Withicon from './Withicon';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                        <Default/>
                        <Withgap/>
                        <Withicon/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;