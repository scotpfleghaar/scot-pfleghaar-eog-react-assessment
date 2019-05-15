import React, {Component} from "react";
import Plot from 'react-plotly.js';
import {transformTemperatureFromData, transformTimeStampFromData} from "../Utilities";

class DroneTemperatureGraph extends Component {
    renderPlot() {
        const {data} = this.props;
        if (!data.length) return null;
        return <Plot
            data={[
                {
                    type: 'scatter',
                    mode: 'lines',
                    x: transformTimeStampFromData(data),
                    y: transformTemperatureFromData(data)
                }
            ]}
            layout={
                {
                    height: 450,
                    title: 'Drone Temperature'
                }
            }
        />
    }

    render() {
        return this.renderPlot();
    }
}


export default DroneTemperatureGraph;
