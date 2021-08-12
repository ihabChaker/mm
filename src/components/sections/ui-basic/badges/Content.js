import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Buttons from './Buttons';
import Gradient from './Gradient';
import Links from './Links';
import Outline from './Outline';
import Pills from './Pills';
import Round from './Round';
import Square from './Square';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <Breadcrumb />
                    <Round/>
                    <Square/>
                    <Pills/>
                    <Links/>
                    <Outline/>
                    <Gradient/>
                    <Buttons/>
                </div>
            </div>
        );
    }
}

export default Content;