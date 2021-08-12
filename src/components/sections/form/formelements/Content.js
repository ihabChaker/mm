import React, { Component } from 'react';
import Basicform from './Basicform';
import Breadcrumb from './Breadcrumb';
import Buttons from './Buttons';
import Checkboxes from './Checkboxes';
import Grouped from './Grouped';
import Radio from './Radio';
import Readonlyform from './Readonlyform';
import Sizes from './Sizes';
import Switches from './Switches';

class Content extends Component {
    render() { 
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <Breadcrumb />
                    <Basicform/>
                    <Readonlyform/>
                    <Checkboxes/>
                    <Radio/>
                    <Switches/>
                    <Buttons/>
                    <Grouped/>
                    <Sizes/>
                </div>
            </div>
        );
    }
}

export default Content;