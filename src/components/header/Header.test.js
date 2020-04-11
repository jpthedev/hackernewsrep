import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header'

describe('Test Case for Header', () => {

    test('Logo to be render', () =>{
        const wrapper = shallow(<Header />);

        expect(wrapper.find('.logo').text()).toContain('Y');
    });
});