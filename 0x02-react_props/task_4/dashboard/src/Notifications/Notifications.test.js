import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notification component tests", () => {
    it("renders Notification component without crashing", () => {
        const notification = shallow(<Notifications />);

        expect(notification).toBeDefined();
    });

    it("renders ul", () => {
        const notification = shallow(<Notifications />);

        expect(notification.find("ul")).toBeDefined();
    });

    it("renders three NotificationItem elements", () => {
        const notification = shallow(<Notifications />);

        expect(notification.find("NotificationItem")).toHaveLength(3);
    });

    it("renders correct text", () => {
        const notification = shallow(<Notifications />);

        expect(notification.find("p").text()).toBe("Here is the list of notifications");
    });

    it("displays menu item when displayDrawer is false", () => {
        const notification = shallow(<Notifications displayDrawer={false} />);
        expect(notification.find(".menuItem")).toHaveLength(1);
    });

    it("doesn't display div.Notifications when displayDrawer is false", () => {
        const notification = shallow(<Notifications displayDrawer={false} />);
        expect(notification.find(".Notifications")).toHaveLength(0);
    });

    it("displays menuItem when displayDrawer is true", () => {
        const notification = shallow(<Notifications displayDrawer={true} />);
        expect(notification.find(".menuItem")).toHaveLength(1);
    });

    it("displays div.Notifications when displayDrawer is true", () => {
        const notification = shallow(<Notifications displayDrawer={true} />);
        expect(notification.find(".Notifications")).toHaveLength(1);
    });
});