import React, { Component, Fragment } from 'react';

class Settings extends Component {
    settingToggle = () => {
        document.getElementById('body').classList.toggle('ms-settings-open')
    }
    darkToggle = () => {
        document.getElementById('body').classList.toggle('ms-dark-theme')
    }
    render() {
        return (
            <Fragment>
                <div className="ms-toggler ms-settings-toggle ms-d-block-lg" onClick={this.settingToggle}>
                    <i className="flaticon-gear" />
                </div>
                <div className="ms-settings-panel ms-d-block-lg">
                    <div className="row">
                        <div className="col-xl-4 col-md-4">
                            <h4 className="section-title">Customize</h4>
                            <div>
                                <label className="ms-switch">
                                    <input type="checkbox" id="dark-mode" onClick={this.darkToggle} />
                                    <span className="ms-switch-slider round" />
                                </label>
                                <span> Dark Mode </span>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4">
                            <h4 className="section-title">Keyboard Shortcuts</h4>
                            <p className="ms-directions mb-0"><code>Esc</code> Close Quick Bar</p>
                            <p className="ms-directions mb-0"><code>Alt + (1 -&gt; 6)</code> Open Quick Bar Tab</p>
                            <p className="ms-directions mb-0"><code>Alt + Q</code> Enable Quick Bar Configure Mode</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Settings;