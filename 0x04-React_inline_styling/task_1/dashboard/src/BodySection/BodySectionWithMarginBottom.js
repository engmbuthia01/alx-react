import React, { Component } from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";
import { StyleSheet, css } from "aphrodite";

class BodySectionWithMarginBottom extends Component {
    render() {
        return (
            <div className={css(styles.BodySectionWithMarginBottom)}>
                <BodySection {...this.props} />
            </div>
        );
    }
}

const styles = StyleSheet.create({
    BodySectionWithMarginBottom: {
        marginBottom: "40px",
    },
});

BodySectionWithMarginBottom.propTypes = {
    ...BodySection.propTypes,
};

BodySectionWithMarginBottom.defaultProps = {
    ...BodySection.defaultProps,
};

export default BodySectionWithMarginBottom;