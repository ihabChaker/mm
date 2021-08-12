import React, { Component } from 'react';
import Basic from './Basic';
import Withoutcontrols from './Withoutcontrols';
import Propia from './Propia';
import Avocado from './Avocado';
import Nightmode from './Nightmode';
import Appletheme from './Appletheme';
import Captor from './Captor';
import Nature from './Nature';
import Breadcrumb from './Breadcrumb';
 
class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                    </div>
                    <div className="col-md-6">
                        <Basic />
                    </div>
                    <div className="col-md-6">
                        <Withoutcontrols />
                    </div>
                    <div className="col-md-6">
                        <Propia />
                    </div>
                    <div className="col-md-6">
                        <Avocado />
                    </div>

                    <div className="col-md-6">
                        <Nightmode />
                    </div>
                    <div className="col-md-6">
                        <Appletheme />
                    </div>
                    <div className="col-md-6">
                        <Captor />
                    </div>
                    <div className="col-md-6">
                        <Nature />
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;