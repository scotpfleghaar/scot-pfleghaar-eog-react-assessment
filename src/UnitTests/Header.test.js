import { Header } from '../components/Header';
import { shallow } from 'enzyme';
import React from 'react';
describe('<Header/>', () => {
    let wrapper;
	beforeEach(() => {
		const testProps = {
			classes: {
				grow: 'testStyle'
			}
		};
	    wrapper = shallow(<Header {...testProps}/>);
	});

	it('Renders the Header', () => {
		expect(wrapper.find('WithStyles(Typography)')).toHaveLength(1);
	});
});
