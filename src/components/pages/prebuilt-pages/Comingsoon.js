import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Content from '../../sections/prebuilt-pages/comingsoon/Content';

class Comingsoon extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags> 
                    <title>Medboard | Coming Soon</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <div className="body ms-body ms-primary-theme" id="body">
                    <Content/>
                </div>
            </Fragment>
        );
    }
}

export default Comingsoon;