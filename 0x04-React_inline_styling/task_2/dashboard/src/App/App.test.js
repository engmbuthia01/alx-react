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
    describe("App component (with shallow rendering)", () => {
        let logOutMock;
        let alertMock;

        beforeEach(() => {
            logOutMock = jest.fn();
            alertMock = jest.spyOn(window, "alert").mockImplementation(() => { });
        });

        afterEach(() => {
            jest.restoreAllMocks();
        });

        it("renders without crashing", () => {
            const wrapper = shallow(<App />);
            expect(wrapper.exists()).toBe(true);
        });

        it("calls logOut and alerts when ctrl+h is pressed", () => {
            const wrapper = shallow(<App logOut={logOutMock} />);

            // Access instance of the component (works with class components in Enzyme)
            const instance = wrapper.instance();

            // Simulate pressing Ctrl + h
            const event = { ctrlKey: true, key: "h", preventDefault: jest.fn() };
            instance.handleKeyDown(event);

            expect(alertMock).toHaveBeenCalledWith("Logging you out");
            expect(logOutMock).toHaveBeenCalled();
        });
    });