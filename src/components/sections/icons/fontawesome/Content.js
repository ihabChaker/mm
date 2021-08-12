import React, { Component } from 'react';
import Brandicon from './Brandicon';
import Breadcrumb from './Breadcrumb';
import Directional from './Directional';
import Filetype from './Filetype';
import Formcontrol from './Formcontrol';
import General from './General';
import Medical from './Medical';
import Texteditor from './Texteditor';
import Videoplayer from './Videoplayer';
import Webapp from './Webapp';

class Content extends Component {
    render() {
        return (  
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                    </div>
                    <General/>
                    <Webapp/>
                    <Filetype/>
                    <Formcontrol/>
                    <Texteditor/>
                    <Directional/>
                    <Videoplayer/>
                    <Brandicon/>
                    <Medical/>
                </div>
            </div>
        );
    }
}

export default Content;