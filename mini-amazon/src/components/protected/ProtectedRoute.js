import React, {useState, useEffect, useContext} from "react"
import {AuthContext} from "../../contexts/AuthContext";
import LoadingComponent from "./LoadingComponent";
import {clearAuthentication, getAuthentication, validateAuthentication} from "../../api/localStorage";

function ProtectedRoute(props) {
    const auth = useContext(AuthContext);
    const { state, dispatch } = auth;

    const [loadingScreen, setLoadingScreen] = useState(true);
    const [protectedComponent, setProtectedComponent] = useState(false);

    useEffect(() => {
        const valid = validateAuthentication();
        if(valid) {
            if(state.token == null) { // make for all
                const localStorageAuth = getAuthentication();
                const { token, username, userType, expireDate } = localStorageAuth;
                dispatch({
                    type: "REFRESH",
                    payload: {
                        isSignedIn: true,
                        token: token,
                        username: username,
                        userType: userType,
                        expireDate: expireDate
                    }
                });
            }
            setProtectedComponent(true);
        }
        else {
            clearAuthentication();
            setProtectedComponent(false);
        };

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
                return props.component()
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