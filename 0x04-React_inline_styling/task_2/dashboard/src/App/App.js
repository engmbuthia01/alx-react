import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";

const listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: getLatestNotification() },
];

class App extends Component {
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }


    handleKeyDown = (e) => {
        if (e.ctrlKey && e.key === "h") {
            alert("Logging you out");
            this.props.logOut();
        }
    };
    render() {
        const { isLoggedIn } = this.props;
        return (
            <React.Fragment>
                <Notifications listNotifications={this.listNotifications} />
                <div className={css(styles.App)}>
                    <Header />
                    {isLoggedIn ? (
                        <BodySectionWithMarginBottom title="Course list">
                            <CourseList listCourses={listCourses} />
                        </BodySectionWithMarginBottom>
                    ) : (
                        <BodySectionWithMarginBottom title="Log in to continue">
                            <Login />
                        </BodySectionWithMarginBottom>
                    )}

                    <BodySection title="News from the School">
                        <p>
                            Welcome to our school portal! Stay tuned for updates about new
                            courses, events, and activities happening throughout the semester.
                        </p>
                    </BodySection>
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    App: {
        height: "100vh",
        maxWidth: "100vw",
        position: "relative",
        fontFamily: "Arial, Helvetica, sans-serif",
    },
});

App.propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
};

App.defaultProps = {
    isLoggedIn: false,
    logOut: () => { },
};


export default App;