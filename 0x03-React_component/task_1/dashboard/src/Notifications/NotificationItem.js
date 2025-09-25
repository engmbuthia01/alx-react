import React from "react";
import "./Notifications.css";
import PropTypes from "prop-types";

function NotificationItem({ type, value, html }) {
    return (
        <>
            {type && value ? <li data-notification-type={type}>{value}</li> : null}
            {html ? <li data-urgent dangerouslySetInnerHTML={{ __html: html }}></li> : null}
        </>
    );
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
};

NotificationItem.defaultProps = {
    type: "default",
    value: "",
    html: null,
};

export default NotificationItem;