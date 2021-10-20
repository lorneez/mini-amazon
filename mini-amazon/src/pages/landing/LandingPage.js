import React, {useEffect, useContext} from "react"
import SideBarComponent from "../../components/SideBarComponent";
import { useHistory } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

function LandingPage() {
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
            <div className={"columns"}>
                <div className={"column is-one-fifth"}>
                    <SideBarComponent type={"landing"}/>
                </div>
                <div className={"column"}>
                    <div className={"container"}>
                        Landing Page
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;