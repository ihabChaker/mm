import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Hospitalreport from './Hospitalreport';
import Reportlist from './Reportlist';
import Analyticsgrowth from '../doctorreport/Analyticsgrowth';
import Analyticssession from '../doctorreport/Analyticssession';
import Conference from '../doctorreport/Conference';
import Hospitalinfo from '../doctorreport/Hospitalinfo';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                    </div>
                    <Reportlist/>
                    <div className="col-xl-7 col-md-12">
                        <Hospitalreport/>
                        <Conference/>
                        <Hospitalinfo/>
                    </div>
                    <div className="col-xl-5 col-md-12">
                        <Analyticsgrowth/>
                        <Analyticssession/>
                    </div>
                </div>
            </div> 
        );
    }
}

export default Content;