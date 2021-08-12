import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Cards from './Cards';
import Lists from './Lists';
import Sortable from './Sortable';
import Withimages from './Withimages';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                        <Cards/>
                        <Lists/>
                    </div>
                    <Sortable/>
                    <Withimages/>
                </div>
            </div>
        );
    }
}

export default Content;