import React, { Component } from 'react';

class Sizes extends Component {
    render() {
        return (
            <div className="col-xl-6 col-md-12">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6>Form Sizing</h6>
                    </div>
                    <div className="ms-panel-body">
                        <p className="ms-directions">Use <code>.col-form-label-{'{'}size{'}'}</code> and <code>.form-control-{'{'}size{'}'}</code> </p>
                        <form>
                            <div className="form-group row">
                                <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Small</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="Small text" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Medium</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="colFormLabel" placeholder="Medium Text" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Large</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control form-control-lg" id="colFormLabelLg" placeholder="Large Text" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sizes;