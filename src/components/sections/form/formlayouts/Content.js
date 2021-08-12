import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Checkout from './Checkout';
import Contact from './Contact';
import Login from './Login';
import Payment from './Payment';
import Recover from './Recover';
import Signup from './Signup';
import Subscribe from './Subscribe';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <Breadcrumb />
                    <Signup />
                    <Login />
                    <Contact />
                    <Payment />
                    <Checkout />
                    <div className="col-xl-6 col-md-12">
                        <div className="row">
                            <Subscribe />
                            <Recover/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;