import React, {Component} from "react";
import GoogleMapReact from 'google-map-react';
import Place from '@material-ui/icons/Place';

const Drone = () => <Place/>;

class DroneMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: {
                lat: 59.95,
                lng: 30.33
            },
            zoom: 6
        }
    }

    render() {
        const currentDroneData = this.props.data[0];
        if (!currentDroneData) return null;
        const {latitude, longitude} = currentDroneData;
        return (
            <div style={{height: '100%', width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: 'AIzaSyBHizhi9yWthb-uvNr_juILneAtp8bZmiQ'}}
                    defaultCenter={{
                        lat: 29.7604,
                        lng: 95.3698
                    }}
                    center={{
                        lat: latitude,
                        lng: longitude
                    }}
                    defaultZoom={this.state.zoom}
                >
                    <Drone
                        lat={latitude}
                        lng={longitude}
                        text="Drone"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}


export default DroneMap;
