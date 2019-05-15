import {LiveDataWrapper} from '../components/LiveDataWrapper';
import {shallow} from 'enzyme';
import React from 'react';

jest.mock("@material-ui/core/Card");
jest.mock("@material-ui/core/styles", () => {
    return {
        withStyles: jest.fn((item) => item = jest.fn())
    }
});
jest.mock("@material-ui/core/CardContent");
jest.mock("../components/DroneTemperatureGraph");
jest.mock("../components/DroneMap");
jest.mock("../components/Dashboard");
jest.mock("@material-ui/core/CardHeader/CardHeader");
jest.useFakeTimers();

describe('<LiveDataWrapper/>', () => {
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
            ],
            classes: {
                card: 'cardClass'
            },
            onLoad: jest.fn(),
            loading: false
        };
        wrapper = shallow(<LiveDataWrapper {...testProps}/>);
    });

    it('Renders the LiveDataWrapper with the correct components', () => {
        console.log(wrapper.debug());
        expect(wrapper.find('Dashboard')).toHaveLength(1);
        expect(wrapper.find('DroneTemperatureGraph')).toHaveLength(1);
        expect(wrapper.find('DroneMap')).toHaveLength(1);
    });

    it('calls componentDidUpdate in an interval', () => {
        expect(testProps.onLoad).toHaveBeenCalledTimes(1);
        wrapper.instance().componentDidUpdate();
        setTimeout(() => {
            expect(testProps.onLoad).toHaveBeenCalledTimes(2)
        }, 4000);

    })
});
