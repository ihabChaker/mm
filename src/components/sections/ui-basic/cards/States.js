import React, { Component, Fragment } from 'react';

class States extends Component {
    render() {
        return (
            <Fragment>
                <div className="col-md-12">
                    <h2 className="section-title">Cards With States</h2>
                    <p className="ms-directions">Use <code>.card-{'{'}state{'}'}</code> for different states</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="ms-card">
                        <div className="ms-card-body">
                            <h6>This is a card Title</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="ms-card card-primary">
                        <div className="ms-card-body">
                            <h6>This is a card Title</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="ms-card card-secondary">
                        <div className="ms-card-body">
                            <h6>This is a card Title</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="ms-card card-success">
                        <div className="ms-card-body">
                            <h6>This is a card Title</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="ms-card card-warning">
                        <div className="ms-card-body">
                            <h6>This is a card Title</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="ms-card card-danger">
                        <div className="ms-card-body">
                            <h6>This is a card Title</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="ms-card card-info">
                        <div className="ms-card-body">
                            <h6>This is a card Title</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="ms-card card-dark">
                        <div className="ms-card-body">
                            <h6>This is a card Title</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default States;