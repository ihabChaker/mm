import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Chat from './Chat';
import Doctorsblock from './Doctorsblock';
import Doctorsstatus from './Doctorsstatus';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <Breadcrumb/>
                    <Doctorsblock/>
                    <Chat/>
                    <Doctorsstatus/>
                </div>
            </div> 
        );
    }
}

export default Content;