import React, {Component} from "react";
import { getTimeFromMS } from '../Utilities'


class Dashboard extends Component {

    render() {
        const currentDroneData = this.props.data[0];
        if (!currentDroneData) return null;
        const {latitude, longitude, metric, timestamp} = currentDroneData;
        return (
            <div style={{height: '100%', width: '100%'}}>
                <p>{`Latitude: ${latitude}`}</p>
                <p>{`Longitude: ${longitude}`}</p>
                <p>{`Temperature: ${metric}`}</p>
                <p>{`Last Received: ${getTimeFromMS(timestamp)}`}</p>
            </div>
        );
    }
}


export default Dashboard;
