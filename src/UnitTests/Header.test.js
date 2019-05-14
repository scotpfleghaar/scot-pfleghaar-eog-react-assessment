import { Header } from '../components/Header';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Header/>', () => {
    let wrapper;
	beforeEach(() => {
	    wrapper = shallow(<Header/>);
	});

	it('someTest', () => {
		expect(wrapper).toBeFalsy();
	});
});
