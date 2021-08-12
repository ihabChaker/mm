import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Iconcards from './Iconcards';
import Infographics from './Infographics';
import Notifications from './Notifications';
import Tradehistory from './Tradehistory';
import Useractivity from './Useractivity';
import Userchat from './Userchat';
import Todobox from './Todobox';
import Emailwidget from './Emailwidget';
import Crypto from './Crypto';
import Chat from './Chat';
import Followers from './Followers';
import Profile from './Profile';
import Identifiers from './Identifiers';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <Breadcrumb/>
                    <Infographics/>
                    <Iconcards/>
                    <Notifications/>
                    <Useractivity/>
                    <Tradehistory/>
                    <Userchat/>
                    <Todobox/>
                    <Emailwidget/>
                    <Crypto/>
                    <Chat/>
                    <Followers/>
                    <Profile/>
                    <Identifiers/>
                </div>
            </div>
        );
    }
}

export default Content;