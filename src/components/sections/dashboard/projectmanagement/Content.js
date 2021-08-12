import React, { Component } from 'react';
import Latestprojects from './Latestprojects';
import Projectsales from './Projectsales';
import Projecttimeline from './Projecttimeline';
import Recentbuyers from './Recentbuyers';
import Sellingsproject from './Sellingsproject';
import Statistics from './Statistics';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <Statistics/>
                    <Recentbuyers/>
                    <Projecttimeline/>
                    <Projectsales/>
                    <Sellingsproject/>
                    <Latestprojects/>
                </div>
            </div>
        );
    }
}

export default Content;