import React, { Component } from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";
import { StyleSheet, css } from "aphrodite";

class BodySectionWithMarginBottom extends Component {
    render() {
        return (
            <div className={css(styles.bodySectionWithMargin)}>
                <BodySection {...this.props} />
            </div>
        );
    }
}

const styles = StyleSheet.create({
    bodySectionWithMargin: {

    },
});

BodySectionWithMarginBottom.propTypes = {
    ...BodySection.propTypes,
};

BodySectionWithMarginBottom.defaultProps = {
    ...BodySection.defaultProps,
};

export default BodySectionWithMarginBottom;