import React, { Component } from 'react';
import { VectorMap } from 'react-jvectormap';

class Arcmap extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6>World Map Only Continents</h6>
                    </div>
                    <div className="ms-panel-body">
                        <VectorMap map={'continents_mill'}
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

export default Arcmap;