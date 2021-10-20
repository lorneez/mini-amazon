import React from "react"

function ProtectedRoute(props) {

    const authenticated = true;

    function renderPage() {
        if(authenticated) {
            return props.component;
        }
        else {
            return (
                <div>
                    invalid authentication
                </div>
            )
        }
    }

    return (
        <div>
            {renderPage()}
        </div>
    )
}

export default ProtectedRoute