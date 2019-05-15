import { Dashboard } from '../components/Dashboard';
import {shallow} from 'enzyme';
import React from 'react';
import { getTimeFromMS } from '../Utilities'
jest.mock('../Utilities');

describe('<Dashboard/>', () => {
    let wrapper, testProps;
    beforeEach(() => {
        testProps = {
            data: [
                {
                    latitude: 'test latitude',
                    longitude: 'test longitude',
                    metric: 'test metric',
                    timestamp: 'test timestamp'
                }
            ]
        };
        wrapper = shallow(<Dashboard {...testProps}/>);
    });

    it('Renders the Dashboard with the given props', () => {
        expect(wrapper.find('div').text()).toContain('Latitude: test latitude');
        expect(wrapper.find('div').text()).toContain('Longitude: test longitude');
        expect(wrapper.find('div').text()).toContain('Temperature: test metric');
        expect(getTimeFromMS).toHaveBeenCalledTimes(1);
    });
    it('returns null when there is no data', () => {
        testProps.data = {};
        wrapper = shallow(<Dashboard {...testProps}/>);
        expect(wrapper.html()).toEqual(null)
    });
});
