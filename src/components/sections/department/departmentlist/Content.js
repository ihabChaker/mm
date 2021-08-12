import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Departmentlist from './Departmentlist';
import Employees from './Employees';
import Totaldepartments from './Totaldepartments';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                    </div>
                    <Totaldepartments/>
                    <Employees/>
                    <Departmentlist/>
                </div>
            </div>
        );
    }
}

export default Content;