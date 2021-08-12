import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Default from './Default';
import Withgap from './Withgap';
import Withicon from './Withicon';
import Withicongap from './Withicongap';

class Content extends Component {
    render() { 
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <Breadcrumb/>
                    <Default/>
                    <Withgap/>
                    <Withicon/>
                    <Withicongap/>
                </div>
            </div>
        );
    }
}

export default Content;