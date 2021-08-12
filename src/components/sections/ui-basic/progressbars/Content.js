import React, { Component } from 'react';
import Animated from './Animated';
import Breadcrumb from './Breadcrumb';
import Default from './Default';
import Gradient from './Gradient';
import Round from './Round';
import Smallbars from './Smallbars';
import Smallround from './Smallround';
import Striped from './Striped';
import Withlabels from './Withlabels';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <Breadcrumb/>
                    <Default/>
                    <Gradient/>
                    <Striped/>
                    <Animated/>
                    <Withlabels/>
                    <Smallbars/>
                    <Round/>
                    <Smallround/>
                </div>
            </div>
        );
    }
}

export default Content;