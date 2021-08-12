import React, { Component } from 'react';
import Followers from './Followers';
import Conversations from './Conversations';
import Overview from './Overview';
import Ytsubscribers from './Ytsubscribers';
import Fbimpressions from './Fbimpressions';
import Twitterfeed from './Twitterfeed';
import Facebookfeed from './Facebookfeed';
import Instagramfeed from './Instagramfeed';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <Overview/>
                    <Followers/>
                    <Conversations/>
                    <Ytsubscribers/>
                    <Fbimpressions/>
                    <Twitterfeed/>
                    <Facebookfeed/>
                    <Instagramfeed/>
                </div>
            </div>
        );
    }
}

export default Content;