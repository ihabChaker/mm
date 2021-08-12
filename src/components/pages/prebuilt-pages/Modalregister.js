import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Topbar from '../../layouts/Topbarthree';
import Setting from '../../layouts/Settings';
import Sidenav from '../../layouts/Sidenav';
import Content from '../../sections/dashboard/webanalytics/Content';

class Modalregister extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags> 
                    <title>Medboard | Modal Register</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <div className="body ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar ms-logged-out" id="body">
                    <Setting />
                    <Sidenav/> 
                    <main className="body-content">
                        <Topbar/>
                        <Content/>
                    </main>
                </div>
            </Fragment>
        );
    }
}

export default Modalregister;