import React from "react";
import Login from "./Login";
import { shallow } from "enzyme";

describe("Login component", () => {
    it("renders without crashing", () => {
        shallow(<Login />);
    });

    it("renders 2 input tags and 2 label tags", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find("input")).toHaveLength(2);
        expect(wrapper.find("label")).toHavelength(2);
    });
});