import React, { Component } from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

class Groupbutton extends Component {
    render() {
        return (
            <div className="col-xl-6 col-md-12">
                <div className="ms-panel ms-btn-display">
                    <div className="ms-panel-header">
                        <h6>Button Groups</h6>
                    </div>
                    <div className="ms-panel-body">
                        <p className="ms-directions">Use <code>.btn-group.btn-group-toggle</code> as a parent for multiple <code>.btn</code></p>
                        <ButtonToolbar>
                            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                <ToggleButton variant="light" value={1}>Active</ToggleButton>
                                <ToggleButton variant="light" value={2}>Radio</ToggleButton>
                                <ToggleButton variant="light" value={3}>Radio</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                    </div>
                    <div className="ms-panel-body">
                        <p className="ms-directions">Use <code>.flex-column</code> for vertical button groups</p>
                        <ButtonToolbar>
                            <ToggleButtonGroup type="radio" name="options" vertical defaultValue={1}>
                                <ToggleButton variant="light" value={1}>Active</ToggleButton>
                                <ToggleButton variant="light" value={2}>Radio</ToggleButton>
                                <ToggleButton variant="light" value={3}>Radio</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                    </div>
                </div>
            </div>
        );
    }
}

export default Groupbutton;