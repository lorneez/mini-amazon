import React, {useEffect, useContext} from "react"
import SideBarComponent from "../../components/SideBarComponent";
import { useHistory } from "react-router-dom";
import {AuthContext} from "../../contexts/AuthContext";


const styles = {
    title: {
        postion: "relative",
        marginTop: '-500px',
        fontSize: '100px'
    }
}
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
                    <div style={styles.title}>
                        Welcome to Zest!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;