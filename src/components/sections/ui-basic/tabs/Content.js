import React, { Component } from 'react';
import Bordered from './Bordered';
import Breadcrumb from './Breadcrumb';
import Default from './Default';
import Left from './Left';
import Pills from './Pills';
import Right from './Right';
import Round from './Round';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <Breadcrumb />
                    <Default/>
                    <Bordered/>
                    <Left/>
                    <Right/>
                    <Pills/>
                    <Round/>
                </div>
            </div>
        );
    }
}

export default Content;