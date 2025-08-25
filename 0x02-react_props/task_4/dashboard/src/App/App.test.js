import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";

describe("App tests", () => {
    it("renders without crashing", () => {
        shallow(<App />);
    });

    it("contains the Notifications component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Notifications).exists()).toBe(true);
    });

    it("contains the Header component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Header).exists()).toBe(true);
    });

    it("contains the Login component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Login).exists()).toBe(true);
    });

    it("contains the Footer component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Footer).exists()).toBe(true);
    });

    it("CourseList is not displayed by default", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(CourseList)).toHaveLength(0);
    });

    describe("when isLoggedIn is true", () => {
        it("Login is not included", () => {
            const wrapper = shallow(<App isLoggedIn={true} />);
            expect(wrapper.find(Login)).toHaveLength(0);
        });

        it("CourseList is included", () => {
            const wrapper = shallow(<App isLoggedIn={true} />);
            expect(wrapper.find(CourseList)).toHaveLength(1);
        });
    });

});