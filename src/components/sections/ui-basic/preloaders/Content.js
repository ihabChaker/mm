import React, { Component } from 'react';
import Abstract from './Abstract';
import Breadcrumb from './Breadcrumb';
import Circle from './Circle';
import Simple from './Simple';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                        <Simple/>
                        <Circle/>
                    </div>
                    <Abstract/>
                </div>
            </div>
        );
    }
}

export default Content;