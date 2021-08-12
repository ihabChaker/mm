import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Nav } from 'react-bootstrap';
import About from './About';

import userimg from '../../../../assets/img/dashboard/doctor-4.jpg'
import Basicimage from '../../ui-basic/cards/Basicimage';
import Notifications from '../../widgets/Notifications';
import Round from '../../ui-basic/progressbars/Round';
import Smallbars from '../../ui-basic/progressbars/Smallbars';
import Emailwidget from '../../widgets/Emailwidget';
import Profile from './Profile';

class Overview extends Component {
    render() {
        return (
            <Tab.Container defaultActiveKey="tab1">
                <div className="ms-profile-overview">
                    <div className="ms-profile-cover">
                        <img className="ms-profile-img" src={userimg} alt="people" />
                        <div className="ms-profile-user-info">
                            <h1 className="ms-profile-username">Chihoo Hwang</h1>
                            <h2 className="ms-profile-role">Professional UX Designer</h2>
                        </div>
                        <div className="ms-profile-user-buttons">
                            <Link to="#" className="btn btn-primary mr-2"> <i className="material-icons">person_add</i> Follow</Link>
                            <Link to="#" className="btn btn-light"> <i className="material-icons">file_download</i> Download Resume</Link>
                        </div>
                    </div>
                    <Nav variant="tabs" className="ms-profile-navigation nav nav-tabs tabs-bordered">
                        <Nav.Item>
                            <Nav.Link eventKey="tab1">Overview</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="tab2">Professional Skills</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="tab3">Portfolio</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <Tab.Content>
                    <Tab.Pane eventKey="tab1">
                    <About />
                    </Tab.Pane>
                    <Tab.Pane eventKey="tab2">
                    <div className="row">
                    <Round/>
                        <Smallbars/>
                        <Emailwidget/>
                        <Profile/>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tab3">
                    <div className="row">
                            <Basicimage />
                            <Notifications />
                        </div>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        );
    }
}

export default Overview;