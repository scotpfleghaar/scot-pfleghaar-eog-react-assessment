import { DroneMap } from '../components/DroneMap';
import {shallow} from 'enzyme';
import React from 'react';

describe('<DroneMap/>', () => {
    let wrapper, testProps;
    beforeEach(() => {
        testProps = {
            data: [
                {
                    latitude: 12.34567,
                    longitude: 98.76543,
                    metric: 234.24242424,
                    timestamp: 12345678
                }
            ]
        };
        wrapper = shallow(<DroneMap {...testProps}/>);
    });

    it('Renders the DroneMap with the given props', () => {
        console.log(wrapper.debug());
        expect(wrapper.find('GoogleMap')).toHaveLength(1);
        expect(wrapper.find('Drone')).toHaveLength(1);
    });

    it('Renders the Drone with the correct Lat and Lng props', () => {
        console.log(wrapper.debug());
        expect(wrapper.find('Drone').prop('lat')).toEqual(12.34567);
        expect(wrapper.find('Drone').prop('lng')).toEqual(98.76543);
    });
});
