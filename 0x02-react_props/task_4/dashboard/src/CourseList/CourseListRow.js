import React from "react";
import PropTypes from "prop-types";

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    if (isHeader) {
        if (textSecondCell === null) {
            return (
                <tr>
                    <th colSpan="2">{textFirstCell}</th>
                </tr>
            );
        }
    } else {
        return (
            <tr>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
        );
    }
}


CourseListRow.PropTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string,
};


CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
}


export default CourseListRow;