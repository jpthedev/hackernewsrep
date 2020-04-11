import React from 'react';
import {shallow} from 'enzyme';
import NewsItem from './NewsItem';
import { hitsProps } from './mockData'
import componentsData from '../../data/componentsData.json';

describe('Test Case for NewsItem', () => {

    let wrapper;

    let setHitsSession = jest.fn();

    beforeEach(() => {
        wrapper = shallow(<NewsItem {...hitsProps} setHitsSession={setHitsSession} labels={componentsData.labels} />)
    });

    test('News Item needs to render', () => {
        expect(wrapper.find('.news-item-wrapper').length).toEqual(1);
    });

    test('Up Arrow button to be displayed', () =>{
        expect(wrapper.find('.arrow-up').length).toEqual(1);
    });

    test('Up Arrow button should change the state', () => {
        wrapper.find('.arrow-up').simulate('click');
        expect(setHitsSession).toHaveBeenCalledTimes(1);
    });

    test('Up Arrow button should hide the button', () => {
        wrapper.find('.arrow-up').simulate('click');
        expect(wrapper.find('.arrow-up').length).toEqual(0);
    });
});