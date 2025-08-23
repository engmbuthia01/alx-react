import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

describe("App tests", () => {
    it("renders without crashing", () => {
        shallow(<App />);
    });
    it("contains the Notifications component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Notifications).exists).toBe(true);
    });
    it("contains the Header component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Header).exists).toBe(true);
    });
    it("contains the Login component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Login).exists).toBe(true);
    });
    it("contains the Footer component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Footer).exists).toBe(true);
    });
});