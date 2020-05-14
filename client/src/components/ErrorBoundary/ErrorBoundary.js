import React from "react";
import {faExclamationCircle} from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div className={"errorContainer"}>
                    <FontAwesomeIcon icon={faExclamationCircle} size="4x"/>
                    <h1>Something went wrong.</h1>;
                </div>)
        }

        return this.props.children;
    }
}

export default ErrorBoundary;