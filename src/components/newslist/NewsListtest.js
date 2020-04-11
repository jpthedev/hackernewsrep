import React from 'react';
import {mount} from 'enzyme';
import NewsList from './NewsList';
import componentsData from '../../data/componentsData.json';
import { hitsProps } from '../newsitem/mockData';

describe('Test Case for NewsList', () => {

    const newsHits = {
        nbHits: 31,
        page: 0,
        nbPages: 2,
        hitsPerPage: 20,
        exhaustiveNbHits: true,
        query: "",
        params: "tags=front_page",
        processingTimeMS: 1,
        hits: [{...hitsProps}]
    }

    let wrapper;

    beforeEach(() => {
        wrapper = mount(<NewsList />);
    });

    test('More button to be render', () =>{
        wrapper.instance().componentsData = componentsData;
        wrapper.instance().newsHits = newsHits;
        wrapper.update();

        expect(wrapper.find('.primary-button').length).toEqual(1);
    });
});