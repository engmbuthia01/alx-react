import React from "react";
import PropTypes from "prop-types";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";

describe("BodySectionWithMarginBottom component", () => {
    it("should render correctly a BodySection component and pass the right props", () => {
        const props = {
            title: "Test title",
            children: <p>Test children node</p>,
        };

        const wrapper = shallow(
            <BodySectionWithMarginBottom {...props} />
        );

        // Check that BodySection is rendered once
        const bodySection = wrapper.find(BodySection);
        expect(bodySection.exists()).toBe(true);
        expect(bodySection).toHaveLength(1);

        // Check that the props are passed correctly
        expect(bodySection.prop("title")).toBe("Test title");
        expect(bodySection.prop("children")).toEqual(<p>Test children node</p>);
    });
})