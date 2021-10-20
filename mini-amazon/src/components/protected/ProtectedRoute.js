import React, {useState, useEffect, useContext} from "react"
import AuthContext from "../../contexts/AuthContext";
import LoadingComponent from "./LoadingComponent";

function ProtectedRoute(props) {
    const auth = useContext(AuthContext);
    const { state } = auth;
    const { isSignedIn } = state;

    const [loadingScreen, setLoadingScreen] = useState(true);
    const [protectedComponent, setProtectedComponent] = useState(false);

    useEffect(() => {
        if(isSignedIn) {
            setProtectedComponent(true);
        }
        else {
            setProtectedComponent(false);
        }

        setTimeout(() => {
            setLoadingScreen(false);
        }, 1000);
    }, [auth, loadingScreen, protectedComponent]);

    function renderPage() {
        if(loadingScreen) {
            return <LoadingComponent/>
        }
        else {
            if(protectedComponent) {
                return props.component
            }
            else {
                return <div>invalid auth</div>
            }
        }
    }

    return (
        <div>
            {renderPage()}
        </div>
    )
}

export default ProtectedRoute