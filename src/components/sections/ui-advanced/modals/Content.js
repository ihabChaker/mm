import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Style1 from './Style1';
import Style2 from './Style2';
import Style3 from './Style3';
import Style4 from './Style4';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                        <Style1/>
                        <Style2/>
                        <Style3/>
                        <Style4/>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Content;