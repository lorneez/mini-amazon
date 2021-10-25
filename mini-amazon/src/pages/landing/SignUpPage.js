import React, {useState, useContext} from "react"
import { useHistory } from "react-router-dom";

import SideBarComponent from "../../components/SideBarComponent";
import {AuthContext} from "../../contexts/AuthContext";


function SignUpPage() {
    const history = useHistory();

    const auth = useContext(AuthContext);
    const { dispatch } = auth;

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit() {
        console.log(username, password)

        dispatch({
            type: "LOGIN",
            payload: {
                isSignedIn: true,
                username: username,
                userType: "buyer"
            }
        });

        history.push("/dashboard");
    }

    return (
        <div>
            <div className={"columns"}>
                <div className={"column is-one-fifth"}>
                    <SideBarComponent type={"landing"}/>
                </div>
                <div className={"column"}>
                    <div className={"container"}>
                        Sign Up Page
                        <div style={{width: 400}}>
                            <input className="input is-primary"  value={username} type="text" placeholder="Username"
                                   onChange={(e)=>setUsername(e.target.value)}
                            />
                            <input className="input is-primary" value={password} type="text" placeholder="Password"
                                   onChange={(e)=>setPassword(e.target.value)}
                            />
                            <button className="button" onClick={() => handleSubmit()}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage;