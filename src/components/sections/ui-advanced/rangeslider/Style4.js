import React, { Component } from 'react';
import IonRangeSlider from 'react-ion-slider';

class Style4 extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Range Slider Skins (2)</h6>
                </div>
                <div className="ms-panel-body">
                    <div className="row">
                        <div className="col-md-3">
                            <h6 className="section-title">Sharp Skin</h6>
                            <div className="ms-range-slider my-4">
                                <IonRangeSlider skin={'sharp'} />
                            </div>
                        </div>
                        <div className="col-md-3 ml-auto mr-auto">
                            <h6 className="section-title">Round Skin</h6>
                            <div className="ms-range-slider my-4">
                                <IonRangeSlider skin={'round'} />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h6 className="section-title">Square Skin</h6>
                            <div className="ms-range-slider my-4">
                                <IonRangeSlider skin={'square'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Style4;