import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


class Basic extends Component {
    render() {
        const mapStyles = {
            width: "100%",
            height: "100%",
        };
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Basic Map</h6>
                </div>
                <div className="ms-panel-body">
                    <div className="map-container">
                        <div className="google-map">
                            <Map
                                google={this.props.google}
                                zoom={12}
                                style={mapStyles}
                                initialCenter={{ lat: 31.53912, lng: -89.29163 }}
                            >
                                <Marker position={{ lat: 31.53912, lng: -89.29163 }} />
                            </Map>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: "AIzaSyDnd9JwZvXty-1gHZihMoFhJtCXmHfeRQg",
})(Basic);