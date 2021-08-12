import React, { Component } from 'react';
import Basicimage from './Basicimage';
import Breadcrumb from './Breadcrumb';
import Gradients from './Gradients';
import Imagewithbutton from './Imagewithbutton';
import Socialcards from './Socialcards';
import States from './States';
import Withheaderfooter from './Withheaderfooter';

class Content extends Component {
    render() {
        return ( 
            <div className="ms-content-wrapper">
                <div className="row">
                    <Breadcrumb/>
                    <Basicimage/>
                    <Imagewithbutton/>
                    <Socialcards/>
                    <States/>
                    <Gradients/>
                    <Withheaderfooter/>
                </div>
            </div>
        );
    }
}

export default Content;