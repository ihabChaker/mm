import React, { Component } from 'react';
import Conversation from './Conversation';
import Sidebar from './Sidebar';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <Sidebar/>
                    <Conversation/>
                </div> 
            </div>
        );
    }
}

export default Content;