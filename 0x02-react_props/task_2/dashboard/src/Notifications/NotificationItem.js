import React from "react";
import PropTypes from "proptypes";

function NotificationItem({ type, value, html }) {
    if (value) {
        return <li data-notification-type={type}>{value}</li>;
    } else {
        return <li data-notification-item={type} dangerouslySetInnerHTML={html}></li>;
    }
}

export default NotificationItem;