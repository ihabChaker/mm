import React, { Component } from 'react';
import Arrowsandcaptions from './Arrowsandcaptions';
import Breadcrumb from './Breadcrumb';
import Buttons from './Buttons';
import Default from './Default';
import Dottedindicator from './Dottedindicator';
import Images from './Images';
import Indicators from './Indicators';

class Content extends Component {
    render() {
        return ( 
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                        <Default/>
                        <Arrowsandcaptions/>
                    </div>
                    <Buttons/>
                    <Indicators/>
                    <Dottedindicator/>
                    <Images/>
                </div>
            </div>
        );
    }
}

export default Content;