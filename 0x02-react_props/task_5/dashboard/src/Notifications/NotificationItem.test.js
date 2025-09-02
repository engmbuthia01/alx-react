import React from "react";
import NotificationItem from "./NotificationItem";
import { shallow } from "enzyme";

describe("NotificationItem component", () => {
    it("renders components without crashing", () => {
        shallow(<NotificationItem />);
    });

    it("renders correct html with type and value props", () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.text()).toEqual('test');
    });

    it("renders the correct html prop", () => {
        const wrapper = shallow(<NotificationItem html="{{ __html: '<u>test</u>' }}" />);
        expect(wrapper.html()).toContain("<u>test</u>");
    });
});