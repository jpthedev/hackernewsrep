import React from 'react';
import {shallow} from 'enzyme';
import App from './App'

describe('Test Case for App', () => {
    it('Render without crash', () => {
        shallow(<App />);
    });
});