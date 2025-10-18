import React from "react";
import { shallow } from "enzyme";
import BodySection from "./BodySection";

describe("BodySection Component", () => {
    it("renders the children and one h2 element", () => {
        const wrapper = shallow(
            <BodySection title="test title">
                <p>test children node</p>
            </BodySection>
        );
        expect(wrapper.exists()).toBe(true)
    });

    it("renders a h2 element and includes a text", () => {
        const wrapper = shallow(<BodySection />);
        expect(wrapper.find("h2").text()).toBe("test title");
    });

    it("renders a p element with some text", () => {
        const wrapper = shallow(<BodySection />);
        expect(wrapper.find("p").text()).toBe("test children node")
    });
});