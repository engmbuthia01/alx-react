import React from "react";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

describe("CourseListRow component", () => {
    it("renders one th with colspan=2 when isHeader true and textSecondCell null", () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textSecondCell={null} />);
        expect(wrapper.find("th").prop("colSpan")).toEqual("2");
    });

    it("renders two cells when textSecondCell is present", () => {

    });

    it("renders two th elements when isheader is false", () => {
        const wrapper = shallow(<CourseListRow isHeader={false} />);
        expect(wrapper.find("td")).toHaveLength(2);
    });
});