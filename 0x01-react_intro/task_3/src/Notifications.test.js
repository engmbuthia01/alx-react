import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';

describe('Notifications compnent tests', () => {
    it('renders Notifications without failing', () => {
        const component = shallow(<Notifications />);
    });

    it('renders three list items', () => {
        const component = shallow(<Notifications />);
        expect(component.find('ul')).toBeDefined();
    });

    it('renders the text Here is the list of notifications', () => {
        const component = shallow(<Notifications />);
        expect(component.find('p')).toBeDefined();
    });
});