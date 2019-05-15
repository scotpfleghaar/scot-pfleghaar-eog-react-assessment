import { DroneTemperatureGraph } from '../components/DroneTemperatureGraph';
import {shallow} from 'enzyme';
import React from 'react';
import {transformTemperatureFromData, transformTimeStampFromData} from "../Utilities";
import Plot from 'react-plotly.js';
jest.mock("../Utilities");
jest.mock('react-plotly.js');

describe('<DroneTemperatureGraph/>', () => {
    let wrapper, testProps;
    beforeEach(() => {
        testProps = {
            data: [
                {
                    latitude: 12.34567,
                    longitude: 98.76543,
                    metric: 234.24242424,
                    timestamp: 12345678
                },
                {
                    latitude: 13.34567,
                    longitude: 97.76543,
                    metric: 244.24242424,
                    timestamp: 153527282
                }
            ]
        };
        wrapper = shallow(<DroneTemperatureGraph {...testProps}/>);
    });

    it('Renders the DroneTemperatureGraph with the given props', () => {
        expect(wrapper.find('PlotlyComponent')).toHaveLength(1);
    });
});
