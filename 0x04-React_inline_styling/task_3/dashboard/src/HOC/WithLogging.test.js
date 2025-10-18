import React from "react";
import { mount } from "enzyme";
import WithLogging from "./WithLogging";
import Login from "../Login/Login";

describe("WithLogging HOC", () => {
    let consoleSpy;

    beforeEach(() => {
        // Mock console.log before each test
        consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
    });

    afterEach(() => {
        // Restore console.log after each test
        consoleSpy.mockRestore();
    });

    it("logs correctly when wrapping a pure HTML element", () => {
        const Component = WithLogging(() => <p />);
        const wrapper = mount(<Component />);

        expect(consoleSpy).toHaveBeenCalledWith("Component Component is mounted");

        wrapper.unmount();

        expect(consoleSpy).toHaveBeenCalledWith("Component Component is going to unmount");
    });

    it("logs correctly when wrapping the Login component", () => {
        const Component = WithLogging(Login);
        const wrapper = mount(<Component />);

        expect(consoleSpy).toHaveBeenCalledWith("Component Login is mounted");

        wrapper.unmount();

        expect(consoleSpy).toHaveBeenCalledWith("Component Login is going to unmount");
    });
});
