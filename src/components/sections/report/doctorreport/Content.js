import React, { Component } from 'react';
import Analyticsgrowth from './Analyticsgrowth';
import Analyticssession from './Analyticssession';
import Breadcrumb from './Breadcrumb';
import Conference from './Conference';
import Hospitalinfo from './Hospitalinfo';
import Management from './Management';
import Reportlist from './Reportlist';

class Content extends Component {
    render() { 
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                    </div>
                    <Reportlist />
                    <div className="col-xl-7 col-md-12">
                        <Conference />
                        <Management />
                        <Hospitalinfo/>
                    </div>
                    <div className="col-xl-5 col-md-12">
                        <Analyticssession/>
                        <Analyticsgrowth/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;