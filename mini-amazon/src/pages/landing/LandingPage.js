import React, {useEffect, useContext} from "react"
import SideBarComponent from "../../components/SideBarComponent";
import { useHistory } from "react-router-dom";
import {AuthContext} from "../../contexts/AuthContext";

function LandingPage() {
    const history = useHistory();

    const auth = useContext(AuthContext);
    const { state } = auth;
    const { isSignedIn, userType } = state;

    useEffect(()=> {
        const { dispatch } = auth;
        if(isSignedIn) {
            if(userType === "buyer") {
                history.push("/dashboard");
            }
            else if(userType === "seller") {
                history.push("/seller/dashboard");
            }
            else {
                // TODO: Handle incorrect user type.
            }
        }
    }, []);

    return (
        <div>
            <div className={"columns center"}>
                <div className={"column is-one-fifth"} style={{height: '100%'}}>
                    <SideBarComponent type={"landing"}/>
                </div>
                <div className={"column center"}>
                    <div className={"container has-text-centered is-size-1 has-text-weight-semibold pt-6 welcometext"}>
                        Welcome to Zest!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;