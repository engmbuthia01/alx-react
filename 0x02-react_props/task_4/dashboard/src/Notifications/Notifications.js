import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";


function Notifications({ displayDrawer }) {
    return (
        <React.Fragment>
            <div className="menuItem">
                Your notifications
            </div>
            {displayDrawer && (
                <div className="Notifications">
                    <button
                        style={{ color: "#3a3a3a", fontWeight: "bold", background: "none", border: "none", fontSize: "15px", position: "absolute", right: "2px", top: "2px", cursor: "pointer" }}
                        aria-label="Close"
                        onClick={console.log("Close button has been clicked")}
                    >
                        <img src={closeIcon} alt="closeIcon" width="10px" />
                    </button>
                    <p>Here is the list of notifications</p>
                    <ul>
                        <NotificationItem type="urgent" value="New course available" />
                        <NotificationItem type="urgent" value="New resume available" />
                        <NotificationItem
                            type="urgent"
                            html={{ __html: "<strong>Urgent requirement</strong> - complete by EOD" }}
                        />
                    </ul>
                </div>
            )}
        </React.Fragment>
    );
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
    displayDrawer: false,
}


export default Notifications;