import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';

describe('Notifications component tests', () => {
    it('renders Notifications without failing', () => {
        const component = shallow(<Notifications />);
        expect(component).toBeDefined();
    });

    it("renders ul", () => {
        const notification = shallow(<Notifications />);
        expect(notification.find("ul")).toBeDefined();
    });

    it('renders three list items', () => {
        const component = shallow(<Notifications />);
        expect(component.find('li')).toHaveLength(3);
    });

    it('renders the text Here is the list of notifications', () => {
        const component = shallow(<Notifications />);
        expect(component.find('p').prop('children')).toBe('Here is the list of notifications');
    });
});