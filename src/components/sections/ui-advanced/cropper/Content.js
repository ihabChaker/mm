import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Controls from './Controls';
import Default from './Default';
import Zoomdisable from './Zoomdisable';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <Breadcrumb />
                    <Default/>
                    <Zoomdisable/>
                    <Controls/>
                </div>
            </div> 
        );
    }
}

export default Content;