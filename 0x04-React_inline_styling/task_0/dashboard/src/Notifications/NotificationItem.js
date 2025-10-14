import React, { PureComponent } from "react";
import "./Notifications.css";
import PropTypes from "prop-types";

class NotificationItem extends PureComponent {
    render() {
        const { type, value, html, markAsRead } = this.props;
        return (
            <>
                {type && value ? <li onClick={() => markAsRead(id)} data-notification-type={type}>{value}</li> : null}
                {html ? <li onClick={() => markAsRead(id)} data-urgent dangerouslySetInnerHTML={{ __html: html }}></li> : null}
            </>
        );
    }

}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
    type: "default",
    value: "",
    html: null,
    markAsRead: () => { },
};

export default NotificationItem;