import React from "react";
import { ErrorBoundaryMessage } from "components/index";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) return <ErrorBoundaryMessage />;
        return this.props.children;
    }
}

export { ErrorBoundary };