import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import googleMapStyles from "./MapStyles";

class Nightmode extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Night Mode Map</h6>
                </div>
                <div className="ms-panel-body">
                    <div className="map-container">
                        <div className="google-map">
                            <Map
                                google={this.props.google}
                                zoom={12}
                                style={this.props.nightStyle}
                                initialCenter={{ lat: 31.53912, lng: -89.29163 }}
                            >
                            </Map>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
Nightmode.defaultProps = googleMapStyles;
export default GoogleApiWrapper({
    apiKey: "AIzaSyDnd9JwZvXty-1gHZihMoFhJtCXmHfeRQg",
})(Nightmode);