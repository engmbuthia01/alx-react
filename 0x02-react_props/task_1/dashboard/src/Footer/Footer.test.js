import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";

describe("Footer component", () => {
    it("renders the Footer component without crashing", () => {
        shallow(<Footer />);
    });
    it("renders the text 'copyright'", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text()).toContain("Copyright");
    });
});