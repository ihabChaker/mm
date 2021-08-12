import React, { Component } from 'react';
import IonRangeSlider from 'react-ion-slider';

const custom_values = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]

class Style1 extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Basic Range Sliders</h6>
                </div>
                <div className="ms-panel-body">
                    <div className="row">
                        <div className="col-md-3 ">
                            <h6 className="section-title">Default Slider</h6>
                            <div className="ms-range-slider my-4">
                                <IonRangeSlider skin={'flat'} min={10} max={100} />
                            </div>
                        </div>
                        <div className="col-md-3 ml-auto mr-auto">
                            <h6 className="section-title">Double Slider</h6>
                            <div className="ms-range-slider my-4">
                                <IonRangeSlider type={'double'} grid={true} min={0} max={1000} from={200} to={800} prefix={'$'} />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h6 className="section-title">Date Slider</h6>
                            <div className="ms-range-slider my-4">
                                <IonRangeSlider grid={true} from={new Date().getMonth()} values={custom_values}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Style1;