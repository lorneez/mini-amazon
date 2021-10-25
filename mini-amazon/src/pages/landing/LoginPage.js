import React, {useState, useContext} from "react"
import { useHistory } from "react-router-dom";

import SideBarComponent from "../../components/SideBarComponent";
import {AuthContext} from "../../contexts/AuthContext";
import PasswordInput from "../../components/PasswordInput";

function LoginPage() {
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
                userType: "seller",
                token: "jwt-token",
                expireDate: Math.floor(new Date().getTime() / 1000 + 2000)
            }
        });

        history.push("/seller/dashboard");
    }

    return (
        <div>
            <div className={"columns"}>
                <div className={"column is-one-fifth"}>
                    <SideBarComponent type={"landing"}/>
                </div>
                <div className={"column"}>
                    <flexbox className={"is-align-items-end"}>
                    <div className={"container"}>
                        Login Page
                        <div style={{width: 400}}>
                            <input className="input is-primary"  value={username} type="text" placeholder="Username"
                                   onChange={(e)=>setUsername(e.target.value)}
                            />
                            {/* <input className="input is-primary" value={password} type="text" placeholder="Password"
                                   onChange={(e)=>setPassword(e.target.value)}
                            /> */}
                            <PasswordInput value = {password}/>
                            <button className="button" onClick={() => handleSubmit()}>Login</button>
                        </div>
                    </div>
                    </flexbox>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;