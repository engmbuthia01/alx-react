import React, { Component } from "react";

function WithLogging(WrappedComponent) {
    class WithLoggingHOC extends Component {
        componentDidMount() {
            const componentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
            console.log(`Component ${componentName} is mounted`);
        }

        componentWillUnmount() {
            const componentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
            console.log(`Component ${componentName} is going to unmount`);
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }
    const componentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
    WithLoggingHOC.displayName = `WithLogging($componentName)`;

    return WithLoggingHOC;
}

export default WithLogging;