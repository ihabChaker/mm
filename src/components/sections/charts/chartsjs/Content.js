import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Bar from './Bar';
import Line from './Line';
import Pie from './Pie';
import Polar from './Polar';
import Dougnut from './Dougnut';
import Groupedbar from './Groupedbar';
import Mixed from './Mixed';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <Breadcrumb/>
                    <Bar/> 
                    <Line/>
                    <Pie/>
                    <Polar/>
                    <Dougnut/>
                    <Groupedbar/>
                    <Mixed/>
                </div>
            </div>
        );
    }
}

export default Content;