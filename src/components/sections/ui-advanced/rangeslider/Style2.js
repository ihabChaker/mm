import React, { Component } from 'react';
import IonRangeSlider from 'react-ion-slider';

class Style2 extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Advanced Range Sliders</h6>
                </div>
                <div className="ms-panel-body">
                    <div className="row">
                        <div className="col-md-3">
                            <h6 className="section-title">Label Collision Detection</h6>
                            <div className="ms-range-slider my-4">
                                <IonRangeSlider type={'double'} grid={true} min={10} max={100} from={47} to={53} prefix={'Weight: '} postfix={' million pounds'} decorate_both={true} />
                            </div>
                        </div>
                        <div className="col-md-3 ml-auto mr-auto">
                            <h6 className="section-title">Snap Slider</h6>
                            <div className="ms-range-slider my-4">
                                <IonRangeSlider type={'double'} grid={true} min={-1000} max={1000} from={-500} to={500} step={250} />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h6 className="section-title">Floating Point Slider</h6>
                            <div className="ms-range-slider my-4">
                                <IonRangeSlider type={'double'} grid={true} min={-12.8} max={12.8} from={-3.2} to={3.2} step={0.1} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Style2;