import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Dark from './Dark';
import Default from './Default';
import Light from './Light';
import State from './State';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <Breadcrumb />
                    <Light/>
                    <Dark/>
                    <Default/>
                    <State/>
                </div>
            </div>
        );
    }
}

export default Content;