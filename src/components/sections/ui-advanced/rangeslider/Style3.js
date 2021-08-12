import React, { Component } from 'react';
import IonRangeSlider from 'react-ion-slider';

class Style3 extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Range Slider Skins</h6>
                </div>
                <div className="ms-panel-body">
                    <div className="row">
                        <div className="col-md-3">
                            <h6 className="section-title">Default Skin</h6>
                            <div className="ms-range-slider my-4">
                                <IonRangeSlider />
                            </div>
                        </div>
                        <div className="col-md-3 ml-auto mr-auto">
                            <h6 className="section-title">Big Skin</h6>
                            <div className="ms-range-slider my-4">
                                <IonRangeSlider skin={'big'} />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h6 className="section-title">Modern Skin</h6>
                            <div className="ms-range-slider my-4">
                                <IonRangeSlider skin={'modern'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Style3;