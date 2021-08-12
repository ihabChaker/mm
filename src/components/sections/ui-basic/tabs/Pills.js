import React, { Component } from 'react';
import { Tab, Nav } from 'react-bootstrap';

class Pills extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="ms-panel ms-panel-fh">
                    <div className="ms-panel-header">
                        <h6>Tab Pills</h6>
                    </div>
                    <div className="ms-panel-body clearfix">
                        <p className="ms-directions">Use <code>.tab-pills</code> with <code>.has-gap</code> in <code>.nav-tabs</code></p>
                        <Tab.Container defaultActiveKey="overview">
                            <Nav variant="tabs" className="nav nav-tabs d-flex tab-pills has-gap nav-justified mb-4">
                                <Nav.Item>
                                    <Nav.Link eventKey="overview">Overview</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="profile">Profile</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="settings">Settings</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="overview">
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                    <p> Cras egestas nisi vel tempor dignissim. Ut condimentum iaculis ex nec ornare. Vivamus sit amet elementum ante. Fusce eget erat volutpat </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="profile">
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                    <p> Cras egestas nisi vel tempor dignissim. Ut condimentum iaculis ex nec ornare. Vivamus sit amet elementum ante. Fusce eget erat volutpat </p>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="settings">
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pills;