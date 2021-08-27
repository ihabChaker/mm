import React, { Component } from 'react';
import Analytics from './Analytics';
import Calendar from './Calendar';
import Doctorengagements from './Doctorengagements';
import Doctorslist from './Doctorslist';
import Hospitalstaff from './Hospitalstaff';
import Latestreport from './Latestreport';
import Newpatient from './Newpatient';
import Notificationgraph from './Notificationgraph';
import Notifications from './Notifications';
import Patientin from './Patientin';
import Patienttimeline from './Patienttimeline';
import Profilewidget from './Profilewidget';
import Totalpatient from './Totalpatient';
import Upcomingappoinment from './Upcomingappoinment';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">

                    <Calendar />

                </div>
            </div>
        );
    }
}

export default Content;