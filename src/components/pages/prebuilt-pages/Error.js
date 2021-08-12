import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Content from '../../sections/prebuilt-pages/error/Content';

class Error extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags> 
                    <title>Medboard | Error 404</title>
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

export default Error;