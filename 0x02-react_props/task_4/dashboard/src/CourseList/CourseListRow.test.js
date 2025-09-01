import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  describe('When isHeader is true', () => {
    it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
      const wrapper = shallow(
        <CourseListRow isHeader={true} textFirstCell="Test Header" />
      );

      expect(wrapper.find('th')).toHaveLength(1);
      expect(wrapper.find('th').prop('colSpan')).toEqual('2');
      expect(wrapper.find('th').text()).toEqual('Test Header');
    });

    it('renders two cells when textSecondCell is present', () => {
      const wrapper = shallow(
        <CourseListRow
          isHeader={true}
          textFirstCell="Header 1"
          textSecondCell="Header 2"
        />
      );

      expect(wrapper.find('th')).toHaveLength(2);
      expect(wrapper.find('th').at(0).text()).toEqual('Header 1');
      expect(wrapper.find('th').at(1).text()).toEqual('Header 2');
    });
  });

  describe('When isHeader is false', () => {
    it('renders correctly two td elements within a tr element', () => {
      const wrapper = shallow(
        <CourseListRow
          isHeader={false}
          textFirstCell="Cell 1"
          textSecondCell="Cell 2"
        />
      );

      expect(wrapper.find('td')).toHaveLength(2);
      expect(wrapper.find('td').at(0).text()).toEqual('Cell 1');
      expect(wrapper.find('td').at(1).text()).toEqual('Cell 2');
    });
  });
});