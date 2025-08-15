import React from 'react';
import { shallow } from 'enzyme';
import App from './App/App'

describe('Appcomponent tests', () => {
    it('renders without crashing', () => {
        const component = shallow(<App />);
        expect(component.find('.App')).toBeDefined();
    });

    it('renders a div with the class App-header', () => {
        const component = shallow(<App />);
        expect(component.find('.App-header')).toBeDefined();
    });

    it('renders a div with the class App-body', () => {
        const component = shallow(<App />);
        expect(component.find('.App-body')).toBeDefined();
    });

    it('renders a div with the class App-footer', () => {
        const component = shallow(<App />);
        expect(component.find('.App-footer')).toBeDefined();
    });

});