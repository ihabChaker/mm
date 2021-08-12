import React, { Component } from 'react';
import { VectorMap } from 'react-jvectormap';

const mapData = {
    US: 100000,
    RU: 9900,
    AU: 86,
    IN: 70,
    BR: 70,
};
class Usersbycountry extends Component {
    render() {
        return (
            <div className="col-xl-7 col-md-12">
                <div className="ms-panel ms-panel-fh">
                    <div className="ms-panel-header header-mini">
                        <h6>Average Users By Country</h6>
                        <p>The top locations where users of your product are located</p>
                    </div>
                    <div className="ms-panel-body ms-average-users-country">
                        <div className="row">
                            <div className="col-xl-4 col-md-12">
                                <span className="progress-label">United States</span>
                                <span className="progress-status">14,805</span>
                                <div className="progress progress-tiny">
                                    <div className="progress-bar bg-secondary" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <span className="progress-label">Brazil</span>
                                <span className="progress-status">11,651</span>
                                <div className="progress progress-tiny">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '70%' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <span className="progress-label">Russia</span>
                                <span className="progress-status">9,157</span>
                                <div className="progress progress-tiny">
                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '60%' }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <span className="progress-label">India</span>
                                <span className="progress-status">7,846</span>
                                <div className="progress progress-tiny">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '45%' }} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <span className="progress-label">Australia</span>
                                <span className="progress-status">6,789</span>
                                <div className="progress progress-tiny mb-0">
                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                            <div className="offset-xl-1 col-xl-7 col-md-12">
                                <VectorMap map={'world_mill'}
                                    backgroundColor="#ffffff"
                                    ref="map "
                                    containerStyle={{
                                        width: '100%',
                                        height: '100%'
                                    }}
                                    regionsSelectable={true}
                                    series={{
                                        regions: [ 
                                            {
                                                values: mapData, //this is your data
                                                scale: ["#357ffa", "#f0ad4e","#445cc8"], //your color game's here
                                                normalizeFunction: "polynomial"
                                            }
                                        ]
                                    }}
                                    regionStyle={
                                        {
                                            initial: {
                                                fill: 'rgb(199,206,234)',
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
                </div>
            </div>
        );
    }
}

export default Usersbycountry;