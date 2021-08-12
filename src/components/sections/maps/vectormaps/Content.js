import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Worldmap from './Worldmap';
import Usamap from './Usamap';
import Arcmap from './Arcmap';
import Markermap from './Markermap';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                    </div>
                    <Worldmap/>
                    <Usamap/>
                    <Arcmap/>
                    <Markermap/>
                </div>
            </div> 
        );
    }
}

export default Content;