import React, { Component } from 'react';
import { VectorMap } from 'react-jvectormap';


class Usamap extends Component {

    render() {
        return (
            <div className="col-md-6">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6>USA Map</h6>
                    </div>
                    <div className="ms-panel-body">
                        <VectorMap map={'us_aea'}
                            backgroundColor="#ffffff"
                            ref="map"
                            containerStyle={{
                                width: '100%',
                                height: '100%'
                            }}

                            regionStyle={
                                {
                                    initial: {
                                        fill: '#384ea1',
                                        "fill-opacity": 1,
                                        stroke: 'none',
                                        "stroke-width": 0,
                                        "stroke-opacity": 1
                                    },
                                    hover: {
                                        fill: 'rgb(50,92,204)',
                                        "fill-opacity": 1,
                                        cursor: 'pointer'
                                    },
                                }
                            }
                            containerClassName="vector-map"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Usamap;