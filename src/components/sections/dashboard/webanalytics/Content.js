import React, { Component } from 'react';
import Audience from './Audience';
import Topbox from './Topbox';
import Useractivity from './Useractivity';
import Usersbycountry from './Usersbycountry';
import Websiteperformance from './Websiteperformance';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <Topbox/>
                    <Audience/>
                    <Websiteperformance/>
                </div> 
                <div className="row">
                    <Useractivity/>
                    <Usersbycountry/>
                </div>
            </div>
        );
    }
}

export default Content;