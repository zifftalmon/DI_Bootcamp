import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: null,
        }
    }

    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if(this.state.hasError) {
            return(
                <div>
                    <h1>something went wrong</h1>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary