import React, { Component } from 'react';

class Buttons extends Component {
    render() {
        return (
            <div className="col-xl-6 col-md-12">
                <div className="ms-panel ms-panel-fh">
                    <div className="ms-panel-header">
                        <h6>Form Buttons</h6>
                    </div>
                    <div className="ms-panel-body">
                        <form>
                            <input type="submit" className="btn btn-primary d-block" name="btn0" defaultValue="Disabled" disabled />
                            <input type="submit" className="btn btn-primary d-block w-25" name="btn25" defaultValue="Short" />
                            <input type="submit" className="btn btn-primary d-block w-50" name="btn50" defaultValue="Medium" />
                            <input type="submit" className="btn btn-primary d-block w-100" name="btn100" defaultValue="Long" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Buttons;